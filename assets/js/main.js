/*************************
sidebar slider controller
**************************/
function navShow() {
	var sidebar = document.getElementById('sidebar-area');
	var content_area = document.getElementById('content-area');
	var brand = document.getElementById('brand');
	if (sidebar.style.marginLeft == 0 || sidebar.style.marginLeft == '0px') {
		sidebar.style.marginLeft = '-250px';
		content_area.style.marginLeft = '0px';
		content_area.style.width = '100%';
		brand.style.marginLeft = '-250px';
	}else {
		sidebar.style.marginLeft = '0px';
		content_area.style.marginLeft = '250px';
		content_area.style.width = 'calc(100% - 250px)';
		brand.style.marginLeft = '0px';

		// header.style.paddingLeft = '240px';
		// hamburger.style.paddingLeft = '277px';
	}
}


/*************************
  JS Media Query
**************************/
function navShow2() {
	var sidebar = document.getElementById('sidebar-area');
	var content_area = document.getElementById('content-area');
	var brand = document.getElementById('brand');

	sidebar.style.marginLeft = '0px';
	content_area.style.marginLeft = '250px';
	content_area.style.width = 'calc(100% - 250px)';
	brand.style.marginLeft = '0px';
}

function navHide() {
	var sidebar = document.getElementById('sidebar-area');
	var content_area = document.getElementById('content-area');
	var brand = document.getElementById('brand');

	sidebar.style.marginLeft = '-250px';
	content_area.style.marginLeft = '0px';
	content_area.style.width = '100%';
	brand.style.marginLeft = '-250px';
}

function hideQuery(x) {
    if (x.matches) { // If media query matches
    	navHide();
    	// document.getElementById('main-container-area').style.backgroundColor = '#222';
    }
}

function hideQuery2(x) {
    if (x.matches) { // If media query matches
    	navShow2();
    	// document.getElementById('main-container-area').style.backgroundColor = '#5D5386';
    }
}

var y = window.matchMedia("(max-width: 1200px)");
hideQuery(y); // Call listener function at run time
y.addListener(hideQuery); // Attach listener function on state changes

var x = window.matchMedia("(min-width: 1200px)");
hideQuery2(x); // Call listener function at run time
x.addListener(hideQuery2); // Attach listener function on state changes














