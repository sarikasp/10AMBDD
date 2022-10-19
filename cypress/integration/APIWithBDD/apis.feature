Feature: Regress API

    Scenario: GET User via API
        Given User sent GET request to retrive multiple users
        Then Users list should be displayed

    Scenario Outline: Create User
        Given User sent POST request to create multiple user with "<name>" and "<job>"
        Then Users should be created with "<name>" and "<job>"
        Examples:
            | name    | job      |
            | Sarika  | Soft_Eng |
            | Chinmay | TL       |
            | Mahesh  | QA       |


    Scenario Outline: Update User
        Given User sent PUT request to update multiple user with "<name>" and "<job>"
        Then Users should be updated with "<name>" and "<job>"
        Examples:
            | name  | job      |
            | Gauri | Soft_Eng |
            | Ninad | TL       |
