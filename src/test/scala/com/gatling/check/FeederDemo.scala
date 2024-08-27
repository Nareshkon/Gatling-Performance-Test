package com.gatling.check

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class FeederDemo extends Simulation{

  //protocol
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

  //scenerio
  val feeder = csv(fileName = "data/Userdata.csv").circular
  val scn = scenario("Abercrombie Website")
    .repeat(3) {
      feed(feeder)
        .exec { session =>
          println("Page:  " + session("Page").as[String])
          println("EndPoint:  " + session("Endpoint").as[String])
          session
        }
        .pause(1
        )
        .exec(
          http("Goto ${Page}")
        .get("${Endpoint}")
        )
    }

  //setup

  setUp(
    scn.inject(
      rampUsers(10) during (60.seconds)
    )
  ).protocols(httpProtocol)
}
