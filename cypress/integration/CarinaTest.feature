Feature: Functionality with different test scenario

    Background:
        Given  User is on signIn page

    #Scenario: Login Test with valid data
    #When  User type data
    #Then  User on account page


    #Scenario: Registration Test
        #Given User on registration page
        #When User type personal information
        #Then Successful registration alert


        Scenario: Purchase Test
            Given User is on product list page
            When User choose random product item
           # And User choose random product properties
           # And User choose shopping cart details
           # Then Get successful alert window
