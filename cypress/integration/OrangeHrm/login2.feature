Feature: Validate the Orange HRM Site login functionality

    Scenario: Login with Valid Credentials
        Given Visit Orange HRM site
        When Enter the Orange HRM Valid Username
        And Enter the Orange HRM Valid Password
        Then Click on Orange HRM Login button
        And Validate the Orange HRM Dashborad
