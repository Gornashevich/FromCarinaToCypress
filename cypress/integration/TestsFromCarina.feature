Feature: Login functionality with different test scenario

  Scenario: Login with valid credentials
    Given  User is on the base page and click sign in button
    When  User type email "address" and "password"
    Then  User click sign in button and get access to account page



