Feature: Ecommerce Site: Add to Cart

    Scenario: Add to cart send delivery
        Given Visit the Ecomm Site
        When Search the product which startes from "ca"
        And Add "Carrot" in the cart
        Then Place order and select country and check condition
        And Validate the Thank you message


    Scenario: Add to cart send delivery
        Given Visit the Ecomm Site
        When Search the product which startes from "po"
        And Add "Potato" in the cart
        Then Place order and select country and check condition
        And Validate the Thank you message