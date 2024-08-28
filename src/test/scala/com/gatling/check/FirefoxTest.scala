package com.gatling.check

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class FirefoxTest extends Simulation{

  // Define the HTTP protocol configuration for Firefox browser
  val httpProtocol = http
    .baseUrl("https://computer-database.gatling.io") // Base URL for all requests
    .inferHtmlResources() // Automatically fetch embedded resources
    .acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8")
    .acceptEncodingHeader("gzip, deflate, br")
    .acceptLanguageHeader("en-US,en;q=0.5")
    .userAgentHeader("Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:115.0) Gecko/20100101 Firefox/115.0")
    .upgradeInsecureRequestsHeader("1")

  // Scenario: Full User Journey on the Computer Database
  val scn = scenario("Full User Journey on Firefox")
    .exec(
      http("Load Computers List")
        .get("/computers") // Load the list of computers
        .check(status.is(200)) // Check that the response status is 200 (OK)
    )
    .pause(1.milliseconds) // Pause for 1 ms

    .exec(
      http("Search for a Computer")
        .get("/computers?f=macbook") // Search for computers with "macbook" in the name
        .check(status.is(200))
    )
    .pause(1.milliseconds)

    .exec(
      http("View Computer Details")
        .get("/computers/6") // View details of a specific computer (ID 6 in this case)
        .check(status.is(200))
    )
    .pause(1.milliseconds)

    .exec(
      http("Add a New Computer")
        .post("/computers") // Add a new computer
        .formParam("name", "GatlingTestComputer")
        .formParam("introduced", "2024-01-01")
        .formParam("discontinued", "")
        .formParam("company", "1") // Set company to "Apple Inc."
        .check(status.is(200))
    )
    .pause(1.milliseconds)

    .exec(
      http("Delete a Computer")
        .post("/computers/6/delete") // Delete the computer with ID 6 (example, usually dynamic ID)
        .check(status.is(200))
    )
    .pause(1.milliseconds)

  // Set up the simulation with the scenario and specify the load profile
  setUp(
    scn.inject(
      rampUsers(200) during (100.seconds)
    )
  ).protocols(httpProtocol)

}
