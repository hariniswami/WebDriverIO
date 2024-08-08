Feature: Asos search box testing

Scenario: API Automation GET
Given Calling GET endpoint
And I call post endpoint



Scenario: Browse asos website and search for an product
Given I want to browse asos website
When I want to search for jackets 
When I click for the jackets
Then your search results for jackets is displayed



Scenario: click product and add to cart 

Given I want to browse asos website
When I want to search for jackets 
When I click for the jackets
Then your search results for jackets is displayed
And I want to click product from the search result page
Then I make sure title and price is displayed
And I want to click size dropdown
And I want to click size value
And I add the product to cart



Scenario:Ensure product image is loading appropreately 


Given I want to browse asos website
When I want to search for jackets 
When I click for the jackets
Then your search results for jackets is displayed
And I want to click product from the search result page
Then I make sure title and price is displayed
And I want to click size dropdown
And I want to click size value
And I add the product to cart
When I click image 1 to check design details
When I click image 2 to check design details
When I click image 3 to check design details
When I click image 4 to check design details
Then I make sure all 4 images are loaded
When I click left chivron button to ensure its sucessfully swipping left
When I click right chivron to ensure its sucessfully swipping right 
When I click on the product design vedio
Then I make sure video is played

