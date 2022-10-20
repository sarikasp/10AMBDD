Feature: Ecommerce Site: Add to Cart


    Scenario: Add to cart send delivery
        Given Visit the Ecomm Sites
        When Searchs the product which startes from "po"
        And Add "Potato" in the carts
        Then Place order and selects country and check condition
        And Validate the Thank you messages