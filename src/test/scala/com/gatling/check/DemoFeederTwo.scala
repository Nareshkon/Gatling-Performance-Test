package com.gatling.check

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class DemoFeederTwo extends Simulation {

  // Define the HTTP protocol configuration
  val httpProtocol = http
    .baseUrl("https://www.abercrombie.com/")
    .inferHtmlResources(BlackList(
      """.*\.css""",
      """.*\.js""",
      """.*\.png""",
      """.*\.jpg""",
      """.*\.gif""",
      """.*\.svg"""
    ),
      // Whitelist: only allow requests matching these patterns
      WhiteList(
        """.*\.html""",
        """.*\.php"""
      )
    )
    .userAgentHeader("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36")

  // Define the feeder to load data from the CSV file
  val feeder = csv("data/Userdata.csv").circular

  // Define the scenario
  val scn = scenario("Abercrombie Website User Journey")
    .repeat(5) {
      feed(feeder) // Load the next row from the feeder
        .exec { session =>
          println("Page:  " + session("Page").as[String])
          println("EndPoint:  " + session("Endpoint").as[String])
          session
        }
        .exec(
          http("Goto ${Page}") // Use the 'page' variable from the feeder for the request name
            .get("${Endpoint}") // Use the 'Endpoint' variable from the feeder for the URL path
            .check(status.is(200)) // Check if the status is 200 OK
        )
        .pause(1) // Pause for 1 second to simulate real user behavior
    }
  // Setup the simulation with a ramp-up of 20 users over 30 seconds
  setUp(
    scn.inject(
      rampUsers(10) during (30.seconds) // Ramp up 20 users over 30 seconds
    )
  ).protocols(httpProtocol)
}

