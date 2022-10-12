Feature: Validate the login functionality

    Scenario: Login with Valid Credentials
        Given Visit Practice Automation site
        When Enter the Valid Username
        And Enter the Valid Password
        Then Click on Login button
        And Validate the Dashborad

    Scenario: Login with Invalid Credentials
        Given Visit Practice Automation site
        When Enter the Invalid Username
        And Enter the Invalid Password
        Then Click on Login button
        And Validate the Error
