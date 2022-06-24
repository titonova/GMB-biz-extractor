const  url_to_biz_category_listing_template = "https://www.google.com/search?q={biz_category}+near+me&start_no={start_no}&cs=1&sz=0&tbm=lcl&sxsrf=ALiCzsZ0ffriVCR6P8GxJz0JoNlI4CO1_w%3A1655978990670&ei=7ju0YsfAKJCNlwS45IuICg&oq={biz_category}+near+me&gs_l=psy-ab.3...0.0.0.99354.0.0.0.0.0.0.0.0..0.0....0...1..64.psy-ab..0.0.0....0.0Vct90Kc1jw#rlfi=hd:;si:;mv:[[6.565004699999999,3.3996589999999998],[6.493752799999999,3.3486640999999997]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!2m1!1e3,lf:1";
const init_start_no =20;
const end_start_no  = 40;
const start_nos_step = 20;




// Triggers when all DOM elements are loaded
document.addEventListener('DOMContentLoaded', function(event) {
	// Attaches listener for click event on extract  button
	document.querySelector('#extractBtn').addEventListener('click', function(e) {
        const url = chrome.runtime.getURL('biz_categories.txt');

    fetch(url)
        .then((response) => response.text()) //assuming file contains json
        .then((biz_categories) => openBizCategoriesListingsPages(biz_categories));
    });
});

function openBizCategoriesListingsPages(biz_categories) {
    const biz_categories_arr = biz_categories.split("\n");

    biz_categories_arr.forEach((biz_category,i)=>{

        var start_nos = range(init_start_no,end_start_no, start_nos_step);

        start_nos.forEach(start_no => {
            biz_category = biz_category.replace(" ","+")
            console.log(biz_category, start_no)
            var url_to_biz_category_listing = url_to_biz_category_listing_template
                                            .replace("{biz_category}", biz_category)
                                                .replace("{start_no}", start_no);

                                                
            console.log(url_to_biz_category_listing);
            chrome.tabs.create({ url: url_to_biz_category_listing });
        });
        
    })

}

const range = (start, stop, step = 1) =>
  Array(Math.ceil((stop - start) / step)).fill(start).map((x, y) => x + y * step);


// function goto_biz_category_page(biz_category, start_no=20) {




//     var url_to_bizs = url_to_bizs_template.replace("{biz_category}", biz_category)
//                                                .replace("{start_no}", start_no);


//             // Request the permission
//             chrome.permissions.request({origins: [url_to_bizs]}, granted => {
//                 if (granted) {
//                     // Create the tab only if it was granted
//                     chrome.tabs.create({ url: 'https://google.com' }, tab => {
//                         chrome.tabs.executeScript(tab.id, { code: 'alert("ffsf")' });
//                     });
//                 }
//                  else {
//                     alert('You need to grant permission')
//                 }
//             });















    
// //    // alert('here');
// //     var url_to_bizs = url_to_bizs_template.replace("{biz_category}", biz_category)
// //                                           .replace("{start_no}", start_no);
// //    // alert(url_to_bizs);
// //     window.location.href = url_to_bizs;

    
// //     //chrome.tabs.create({ url: url_to_bizs },function(tab) {});
// //     // chrome.tabs.executeScript({
// //     //     code: `alert('location:', window.location.href);`
// //     //   });


// //     // chrome.tabs.create({url: url_to_bizs}).then(() => {
// //     //     chrome.tabs.executeScript({
// //     //       code: `alert('location:', window.location.href);`
// //     //     });
// //     //   });


// //     chrome.tabs.create({ url: 'https://stackoverflow.com/', active: false },    function(tab)
// //     {
// //         chrome.tabs.executeScript(tab.id,
// //             {
// //                 code : "alert('hhh');"
// //             }, () => chrome.runtime.lastError);

// //         //chrome.tabs.remove(tab.id);
// //     });
    
  
    
// }