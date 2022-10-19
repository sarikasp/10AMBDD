Feature: Validate the Automation Exercise Site for upload file

    Scenario: Login with Valid Credentials
        Given Visit Automation Exercise site for login
        When Enter the Username and Password
        Then Click on login btn
        And Validate the Dashborad message


    Scenario: Upload File
        Given Open the contact page
        When Add your details
        Then Validate the file upload msg

