const data=require('../testdata/login.json')


class searchpage{

searchbox() {

return $('//input[@placeholder="Search for items and brands"]')

}

dropdownsearchbox() {

return $('//li[@id="search-result-0"]')

}

get searchresults() {

return $('//div[@id="search-term-banner"]')


}

denimjacket() {

return $('//p[@id="pta-product-205521676-0"]')

}

get titl() {

return $('//h1[contains(text(),"ASOS DESIGN denim western jacket in midwash blue")]')


}

get price() {
return $('//div[@data-testid="product-price"]')

}
sizedropdown() {
return $('//select[@id="variantSelector"]')

}
sizevalue() {

return $('//option[contains(text(),"XS - AU 4-6")]')

}

addtocart() {

return $('//div[text()="Add to bag"]')

}
 Image1() {

    return $('//img[@alt="Thumbnail 1 of 4"]')
}

Image2() {

return $('//img[@alt="Thumbnail 2 of 4"]')

}

 Image3() {

return $('//img[@alt="Thumbnail 3 of 4"]')

}

 image4() {

    return $('//img[@alt="Thumbnail 4 of 4"]')

}

swipeleft() {

    return $('//span[@class="product-chevron-left-large-outlined"]')

}

swiperight() {

return $('//span[@class="product-chevron-right-large-outlined"]')

}

  video() {

return $('//span[@class="interactive-text"]')

}

  get playvideo() {

    return $('//video[@class="amp-page amp-video-element"]/source')


}
async inputsearchbox() {

await this.searchbox().setValue(data.searchitem.products)

}

async selectdropdownsearch() {

await this.dropdownsearchbox().click()


}

async clickdenimjacket() {
await this.denimjacket().click()


}

async clicksizedropdown() {

await this.sizedropdown().click()

}

async clicksizevalue() {
await this.sizevalue().click()

}


async clickaddtocart() {
await this.addtocart().click()


}

async clickImage1() {

await this.Image1().click()


}

async clickimage2() {

   await this.Image2().click() 
}

async clickimage3() {

await this.Image3().click()

}

async clickimage4() {


await this.image4().click()

}


async clickswipeleft() {

    await this.swipeleft().click()
}


async clickswiperight() {

    await this.swiperight().click()
}


async clickVideo() {

await this.video().click()


}


async getapiendpoint(){

    const baseURL = "https://dummy.restapiexample.com/api/v1/employees"
    const response = await fetch(baseURL);
    const data = await response.json();
    expect(data.status).toBe("success");
    expect(data.message).toBe("Successfully! All records has been fetched.")


}

async postendtpoint(){
    const baseURL = "https://jsonplaceholder.typicode.com/posts";
    const requestBody = {
        title: 'foo',
        body: 'bar',
        userId: 1
      };

        const response = await fetch(baseURL, 
            {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });

        const data = await response.json(); // Await the JSON parsing
        console.log("Success:", data);
        expect(response.status).toBe(201);
}
}


module.exports=searchpage