const {Given,When,Then}=require('@wdio/cucumber-framework')
const searchpage=require('../pageobject/searchpage')


Given(/^Calling GET endpoint$/, async() => {
	const page=new searchpage
    await page.getapiendpoint()
	
});

Given(/^I call post endpoint$/, async() => {
	const page=new searchpage
    await page.postendtpoint()
	
});


Given(/^I want to browse asos website$/, async() => {
	await browser.url('https://www.asos.com/women/')
});


When(/^I want to search for jackets$/, async() => {
	const page=new searchpage
    await page.inputsearchbox()
});


When(/^I click for the jackets$/, async() => {
	const page=new searchpage
    await page.selectdropdownsearch()
});



Then(/^your search results for jackets is displayed$/, async() => {
	const searchbannerdisplay=new searchpage
    await expect(searchbannerdisplay.searchresults).toBeDisplayed()
});



When(/^I want to click product from the search result page$/, async() => {
	const page =new searchpage
	await page.clickdenimjacket()
});


Then(/^I make sure title and price is displayed$/, async() => {
	const details=new searchpage
	await expect(details.titl).toBeDisplayed()
	await expect(details.price).toBeDisplayed()
});



When(/^I want to click size dropdown$/, async() => {
	const page=new searchpage
	await page.clicksizedropdown()
});


When(/^I want to click size value$/,async () => {
	const page=new searchpage
	await page.clicksizevalue()
});


When(/^I add the product to cart$/, async() => {
	const page=new searchpage
	await page.clickaddtocart()
});



When(/^I click image 1 to check design details$/,async () => {
	const page=new searchpage
	await page.clickImage1()
});

When(/^I click image 2 to check design details$/, async() => {
	const page=new searchpage
	await page.clickimage2()

});


When(/^I click image 3 to check design details$/, async() => {
	const page=new searchpage
	await page.clickimage3()
});


When(/^I click image 4 to check design details$/, async() => {
	const page=new searchpage
	await page.clickimage4()
});


Then(/^I make sure all 4 images are loaded$/, () => {
	const Imageloadedsucessfully=new searchpage
	 expect(Imageloadedsucessfully.Image1).toBeDisplayed()
	 expect(Imageloadedsucessfully.Image2).toBeDisplayed()
	 expect(Imageloadedsucessfully.image3).toBeDisplayed()
	 expect(Imageloadedsucessfully.image4).toBeDisplayed()
});



When(/^I click left chivron button to ensure its sucessfully swipping left$/,async () => {
	const page=new searchpage
	await page.clickswipeleft()

});


When(/^I click right chivron to ensure its sucessfully swipping right$/, async() => {
	const page=new searchpage
	await page.clickswiperight()
});



When(/^I click on the product design vedio$/, async() => {
	const page=new searchpage
	await page.clickVideo()
});



Then(/^I make sure video is played$/, () => {
	const playproductvideo=new searchpage
	expect(playproductvideo.playvideo).toBeDisplayed()
});




