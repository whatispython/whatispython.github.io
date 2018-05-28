webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mine_mine_component__ = __webpack_require__("./src/app/mine/mine.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__post_post_component__ = __webpack_require__("./src/app/post/post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__blog_blog_component__ = __webpack_require__("./src/app/blog/blog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'mine', component: __WEBPACK_IMPORTED_MODULE_3__mine_mine_component__["a" /* MineComponent */] },
    { path: 'post', component: __WEBPACK_IMPORTED_MODULE_4__post_post_component__["a" /* PostComponent */] },
    { path: 'blog', component: __WEBPACK_IMPORTED_MODULE_5__blog_blog_component__["a" /* BlogComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".ui.secondary.menu .right.menu .item {\r\n  padding-right: 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui register sidebar vertical menu\">\r\n  <form novalidate #f=\"ngForm\" (ngSubmit)=\"onRegister(f)\" id=\"regForm\">\r\n    <div class=\"item\">\r\n      用户名：\r\n      <div class=\"menu\">\r\n        <a class=\"item\">\r\n          <div class=\"ui input\"><input type=\"text\" name=\"name\" placeholder=\"输入用户名\" required ngModel maxlength=\"64\"></div>\r\n        </a>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"item\">\r\n      个性签名：\r\n      <div class=\"menu\">\r\n        <a class=\"item\">\r\n          <div class=\"ui input\"><input type=\"text\" name=\"signature\" placeholder=\"输入个性签名\" required ngModel maxlength=\"64\"></div>\r\n        </a>\r\n      </div>\r\n    </div>\r\n    <div class=\"item\">\r\n      <div class=\"ui two buttons\">\r\n        <button class=\"ui button\" type=\"reset\">重置</button>\r\n        <div class=\"or\"></div>\r\n        <button class=\"ui primary button\" type=\"submit\">注册</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n\r\n<div class=\"ui tag sidebar vertical menu\">\r\n  <div class=\"item\">\r\n    标签名：\r\n    <div class=\"menu\">\r\n      <a class=\"item\">\r\n        <div class=\"ui input\"><input type=\"text\" placeholder=\"输入你想要的标签名\"></div>\r\n      </a>\r\n    </div>\r\n  </div>\r\n  <div class=\"item\">\r\n    <button class=\"ui fluid primary button\">创建</button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"ui vertical inverted segment\">\r\n  <div class=\"ui container\"><h3>星云链博客</h3></div>\r\n</div>\r\n\r\n<div class=\"ui home container\">\r\n  <div class=\"ui vertical basic segment\">\r\n    <div class=\"ui secondary pointing menu\">\r\n      <a class=\"active item\" routerLink=\"/home\" (click)=\"menuIndex=1\" [ngClass]=\"{'active': menuIndex==1}\">\r\n        首页\r\n      </a>\r\n      <a class=\"item\" routerLink=\"/mine\" (click)=\"menuIndex=2\" [ngClass]=\"{'active': menuIndex==2}\">\r\n        我的博客\r\n      </a>\r\n      <a class=\"item\" routerLink=\"/post\" (click)=\"menuIndex=3\" [ngClass]=\"{'active': menuIndex==3}\">\r\n        写博文\r\n      </a>\r\n\r\n      <!--div class=\"right menu\">\r\n        <div class=\"item\">\r\n          <div class=\"ui red button\" (click)=\"showRegister()\">注册</div>\r\n        </div>\r\n      </div-->\r\n    </div>\r\n  </div>\r\n\r\n  <router-outlet></router-outlet>\r\n  <app-notification></app-notification>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notification_notification_component__ = __webpack_require__("./src/app/notification/notification.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(userService, notification, router) {
        this.userService = userService;
        this.notification = notification;
        this.router = router;
        this.menuIndex = 1;
    }
    AppComponent.prototype.ngOnInit = function () {
        var pathName = window.location.pathname, pathMap = { "/": 1, "/home": 1, "/mine": 2, "/post": 3 };
        this.menuIndex = pathMap[pathName];
    };
    AppComponent.prototype.showRegister = function () {
        $(".ui.register.sidebar").sidebar("toggle");
    };
    AppComponent.prototype.showSendPay = function (pid) {
        $(".ui.sendpay.sidebar").sidebar("toggle");
    };
    AppComponent.prototype.onRegister = function (regForm) {
        var _this = this;
        if (regForm.valid) {
            var params = regForm.value;
            params.url = "https://api.adorable.io/avatars/285/" + params.author + ".png";
            this.userService.createAuthor(params).subscribe(function (value) {
            }, function (error) {
                _this.notification.show(error);
                regForm.reset();
            }, function () {
                _this.notification.show("用户注册成功");
                regForm.reset();
                _this.showRegister();
            });
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            providers: [__WEBPACK_IMPORTED_MODULE_3__notification_notification_component__["a" /* NotificationComponent */]],
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__notification_notification_component__["a" /* NotificationComponent */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mine_mine_component__ = __webpack_require__("./src/app/mine/mine.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__blog_service__ = __webpack_require__("./src/app/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tag_service__ = __webpack_require__("./src/app/tag.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__notification_notification_component__ = __webpack_require__("./src/app/notification/notification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__blog_blog_component__ = __webpack_require__("./src/app/blog/blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__post_post_component__ = __webpack_require__("./src/app/post/post.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__mine_mine_component__["a" /* MineComponent */],
                __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__notification_notification_component__["a" /* NotificationComponent */],
                __WEBPACK_IMPORTED_MODULE_11__blog_blog_component__["a" /* BlogComponent */],
                __WEBPACK_IMPORTED_MODULE_12__post_post_component__["a" /* PostComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__blog_service__["a" /* BlogService */], __WEBPACK_IMPORTED_MODULE_6__tag_service__["a" /* TagService */], __WEBPACK_IMPORTED_MODULE_7__user_service__["a" /* UserService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blog.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nebpay__ = __webpack_require__("./node_modules/nebpay/lib/nebPay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nebpay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_nebpay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nebulas__ = __webpack_require__("./node_modules/nebulas/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nebulas___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_nebulas__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BlogService = /** @class */ (function () {
    function BlogService() {
        this.dAppAddress = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].dAppAddress;
        this.nebPay = new __WEBPACK_IMPORTED_MODULE_3_nebpay__();
        this.neb = new __WEBPACK_IMPORTED_MODULE_4_nebulas__["Neb"]();
    }
    BlogService.prototype.ngOnInit = function () {
        this.neb.setRequest(new __WEBPACK_IMPORTED_MODULE_4_nebulas__["HttpRequest"](__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].http_request_url));
    };
    BlogService.prototype.createPost = function (params) {
        var _this = this;
        this.neb.setRequest(new __WEBPACK_IMPORTED_MODULE_4_nebulas__["HttpRequest"](__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].http_request_url));
        var that = this, value = "0", callFunction = "createPost", callArgs = JSON.stringify([params.title, params.content, params.cat]), obs = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.nebPay.call(_this.dAppAddress, value, callFunction, callArgs, {
                listener: function (res) {
                    console.log("交易提交成功");
                    var txHash = res.txhash;
                    that.intervalQuery = setInterval(function () {
                        that.neb.api.getTransactionReceipt(txHash).then(function (res) {
                            console.log(res);
                            if (res.status === 1) {
                                clearInterval(that.intervalQuery);
                                console.log("交易完成");
                                observer.complete();
                            }
                            if (res.status === 0) {
                                clearInterval(that.intervalQuery);
                                observer.error(res.execute_result);
                            }
                            if (res.status === 2) {
                                clearInterval(that.intervalQuery);
                                observer.error("NAS余额不足，请充值后再试");
                            }
                        });
                    }, 5000);
                }
            });
        });
        return obs;
    };
    BlogService.prototype.getAllPost = function () {
        var _this = this;
        var from = 'n1JjwbAQAqr6cV6btULFhP6596o3KkwNSVj', value = "0", nonce = "0", gas_price = "1000000", gas_limit = "2000000", contract = {
            "function": "getAllPost",
            "args": "[]"
        }, that = this, obs = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.neb.setRequest(new __WEBPACK_IMPORTED_MODULE_4_nebulas__["HttpRequest"](__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].http_request_url));
            that.neb.api.call(from, that.dAppAddress, value, nonce, gas_price, gas_limit, contract).then(function (res) {
                console.log("读取信息成功");
                console.log(res.result);
                observer.next(res.result);
            }).catch(function () {
                observer.error("读取博客列表失败");
            });
        });
        return obs;
    };
    BlogService.prototype.getAuthorPosts = function () {
        var _this = this;
        var value = "0", nonce = "0", gas_price = "1000000", gas_limit = "2000000", contract = {
            "function": "getAuthorPosts",
            "args": "[]"
        }, that = this, obs = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.neb.setRequest(new __WEBPACK_IMPORTED_MODULE_4_nebulas__["HttpRequest"](__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].http_request_url));
            _this.nebPay.simulateCall(_this.dAppAddress, "0", 'getUserAddr', "", {
                listener: function (res) {
                    var result = res.result, curUser;
                    if (result === 'null') {
                        observer.error("似乎没有安装钱包插件，请先装插件再使用");
                    }
                    else {
                        try {
                            curUser = JSON.parse(result);
                            that.neb.api.call(curUser, that.dAppAddress, value, nonce, gas_price, gas_limit, contract).then(function (res) {
                                console.log("读取信息成功");
                                observer.next(res.result);
                            }).catch(function () {
                                observer.error("读取博客列表失败");
                            });
                        }
                        catch (err) {
                            observer.error("获取用户钱包地址出错");
                        }
                    }
                }
            });
        });
        return obs;
    };
    BlogService.prototype.sendPay = function (params) {
        var _this = this;
        var that = this, value = "0", callFunction = "sendPay", callArgs = JSON.stringify([params.fromName, params.pid, params.comment]), obs = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.nebPay.call(_this.dAppAddress, value, callFunction, callArgs, {
                listener: function (res) {
                    console.log("交易提交成功");
                    var txHash = res.txhash;
                    that.intervalQuery = setInterval(function () {
                        that.neb.api.getTransactionReceipt(txHash).then(function (res) {
                            if (res.status === 1) {
                                clearInterval(that.intervalQuery);
                                console.log("交易完成");
                                observer.next(res);
                            }
                        });
                    }, 5000);
                }
            });
        });
        return obs;
    };
    BlogService.prototype.setCurrentBlog = function (blog) {
        this.currentBlog = blog;
    };
    BlogService.prototype.getCurrentBlog = function () {
        return this.currentBlog;
    };
    BlogService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], BlogService);
    return BlogService;
}());



/***/ }),

/***/ "./src/app/blog/blog.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/blog/blog.component.html":
/***/ (function(module, exports) {

module.exports = "<!--div class=\"ui small modal transition hidden\" id=\"blogDetail\">\r\n  <div class=\"header\">\r\n    <p class=\"title\"></p>\r\n  </div>\r\n  <div class=\"blog content\">\r\n  </div>\r\n\r\n  <div class=\"content\">\r\n    <div class=\"ui comments\">\r\n      <h3 class=\"ui dividing header\">评论</h3>\r\n      <div class=\"all-comment\">\r\n        <div class=\"comment\" *ngFor=\"let i of payItems\">\r\n          <a class=\"avatar\">\r\n            <img src=\"https://api.adorable.io/avatars/285/{{i.from}}.png\">\r\n          </a>\r\n          <div class=\"content\">\r\n            <a class=\"author\">{{i.fromName}}</a>\r\n            <div class=\"metadata\">\r\n              <span class=\"date\">Today at 5:42PM</span>\r\n            </div>\r\n            <div class=\"text\">\r\n              {{i.comment}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n\r\n  <div class=\"content\">\r\n    <h3 class=\"ui dividing header\">\r\n      打赏\r\n    </h3>\r\n\r\n    <form novalidate #f=\"ngForm\" (ngSubmit)=\"onSendPay(f)\" id=\"sendPayForm\" class=\"ui hidden form\">\r\n      <div class=\"field\">\r\n        <label>请留下你的大名</label>\r\n        <input type=\"text\" name=\"fromName\" placeholder=\"输入你的名字\" ngModel maxlength=\"16\" required />\r\n      </div>\r\n      <div class=\"field\">\r\n        <label>说点儿什么吧</label>\r\n        <input type=\"text\" name=\"comment\" placeholder=\"评论一下这篇博客\" ngModel maxlength=\"128\" required />\r\n      </div>\r\n\r\n      <button class=\"ui secondary submit labeled icon button\">\r\n        <i class=\"dollar sign icon\"></i> 打赏\r\n      </button>\r\n    </form>\r\n  </div>\r\n\r\n  <div class=\"actions\">\r\n    <div class=\"ui primary button\" (click)=\"hide()\">\r\n      关闭\r\n    </div>\r\n  </div>\r\n  <input type=\"hidden\">\r\n</div-->\r\n\r\n<div class=\"ui grid\">\r\n  <div class=\"column\">\r\n    <div class=\"ui raised segment\">\r\n      <div class=\"ui red ribbon label\">{{blog.cat}}</div>\r\n      <div class=\"item\">\r\n        <div class=\"content\">\r\n          <h3></h3>\r\n          <h3 class=\"ui red header\">{{blog.title}}</h3>\r\n          <div class=\"meta\"></div>\r\n          <div class=\"description\">\r\n            <p [innerHTML]=\"blog.content\"></p>\r\n          </div>\r\n          <div class=\"extra\">\r\n            <div class=\"ui basic red label\"><i class=\"user icon\"></i>{{blog.authorInfo.name}}</div>\r\n            <div class=\"ui basic red label\"><i class=\"dollar sign icon\"></i>{{blog.value}}</div>\r\n            <div class=\"ui basic red label\">\r\n              <i class=\"comment outline icon\"></i>{{blog.payItems.length}}\r\n            </div>\r\n            <div class=\"ui basic label\">\r\n              <i class=\"calendar alternate outline icon\"></i>{{blog.ptime | date: 'yyyy-MM-dd HH:mm'}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"ui raised segment\">\r\n      <div class=\"ui comments\" style=\"max-width: 100%\">\r\n        <div class=\"ui red dividing header\"><i class=\"dollar sign icon\"></i>我要打赏</div>\r\n\r\n        <form novalidate #f=\"ngForm\" (ngSubmit)=\"onSendPay(f, blog, $event)\" class=\"ui reply form\">\r\n          <div class=\"field\">\r\n            <input type=\"text\" name=\"fromName\" placeholder=\"好汉请留名\" ngModel maxlength=\"16\" required/>\r\n          </div>\r\n          <div class=\"field\">\r\n            <textarea type=\"text\" name=\"comment\" placeholder=\"评论一下这篇博客\" ngModel maxlength=\"32\" required></textarea>\r\n          </div>\r\n\r\n          <button class=\"ui red labeled icon button\">\r\n            <i class=\"dollar sign icon\"></i>打赏\r\n          </button>\r\n        </form>\r\n\r\n        <div class=\"ui red dividing header\"><i class=\"comment outline icon\"></i>{{blog.payItems.length}}个小伙伴打赏过</div>\r\n        <div class=\"comment\" *ngFor=\"let i of blog.payItems\">\r\n          <a class=\"avatar\">\r\n            <img src=\"https://api.adorable.io/avatars/285/{{i.from}}.png\">\r\n          </a>\r\n          <div class=\"content\">\r\n            <a class=\"author\">{{i.fromName}}</a>\r\n            <div class=\"metadata\">\r\n              <span class=\"date\">{{i.ct | date: 'yyyy-MM-dd HH:mm'}}</span>\r\n            </div>\r\n            <div class=\"text\">\r\n              {{i.comment}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/blog/blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blog_service__ = __webpack_require__("./src/app/blog.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlogComponent = /** @class */ (function () {
    function BlogComponent(blogService, ref) {
        this.blogService = blogService;
        this.ref = ref;
        this.payItems = [];
    }
    BlogComponent.prototype.ngOnInit = function () {
        this.blog = this.blogService.getCurrentBlog();
    };
    BlogComponent.prototype.show = function (data) {
        var payItems = data.payItems, commentsHtml = "";
        payItems.forEach(function (item) {
            var html = "<div class='comment'><a class='avatar'><img src='https://api.adorable.io/avatars/285/'" + item.from + ".png></a>" +
                "<div class='content'><a class='author'>" + item.fromName + "</a><div class='metadata'><span class='date'>" + "</span></div>" +
                "<div class='text'>" + item.comment + "</div></div></div>";
            commentsHtml += html;
        });
        $("#blogDetail .all-comment").html(commentsHtml);
        $("#blogDetail .header .title").html(data.title);
        $("#blogDetail .blog.content").html(data.content);
        $("#blogDetail input[type=hidden]").val(data.pid);
        $("#blogDetail").modal('show');
    };
    BlogComponent.prototype.hide = function () {
        $("#blogDetail").modal('hide');
    };
    BlogComponent.prototype.onSendPay = function (sendPayForm, blog, event) {
        var _this = this;
        if (sendPayForm.valid) {
            var params_1 = sendPayForm.value, target_1 = $(event.target), payItems_1 = blog.payItems;
            params_1.pid = blog.pid;
            target_1.addClass("loading");
            this.blogService.sendPay(params_1).subscribe(function (value) {
                sendPayForm.reset();
                target_1.removeClass("loading");
                params_1.from = value.from;
                params_1.ct = new Date().getTime();
                payItems_1.push(params_1);
                _this.ref.tick();
                window.scrollTo(0, 0);
            }, function (error) { }, function () { });
        }
    };
    BlogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-blog',
            template: __webpack_require__("./src/app/blog/blog.component.html"),
            styles: [__webpack_require__("./src/app/blog/blog.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__blog_service__["a" /* BlogService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ApplicationRef */]])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui vertical basic blog loading segment\">\r\n  <!--div class=\"ui two column grid\" *ngFor=\"let blog of allBlog\">\r\n    <div class=\"twelve wide column\">\r\n      <div class=\"ui fluid card\">\r\n        <div class=\"content\">\r\n          <div class=\"header\">{{blog.title}}</div>\r\n          <div class=\"meta\">\r\n            <span class=\"right floated time\">{{blog.ptime | date: 'yyyy-MM-dd HH:mm'}}</span>\r\n            <span class=\"category\">{{blog.cat}}</span>\r\n          </div>\r\n          <div class=\"description\">\r\n            <p [innerHTML]=\"blog.content\" class=\"rich-content\"></p>\r\n          </div>\r\n        </div>\r\n        <div class=\"extra content\">\r\n          <div class=\"right floated author\">\r\n            <img class=\"ui avatar image\" src=\"https://api.adorable.io/avatars/285/{{blog.author}}.png\">{{blog.authorInfo.name}}\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"four wide column\">\r\n      <div class=\"ui comments\">\r\n        <h3 class=\"ui dividing header\">打赏列表</h3>\r\n        <div class=\"comment-wrapper\">\r\n          <div class=\"comment\" *ngFor=\"let i of blog.payItems\">\r\n            <a class=\"avatar\">\r\n              <img src=\"https://api.adorable.io/avatars/285/{{i.from}}.png\">\r\n            </a>\r\n            <div class=\"content\">\r\n              <a class=\"author\">{{i.fromName}}</a>\r\n              <div class=\"metadata\">\r\n                <span class=\"date\">{{i.ct | date: 'yyyy-MM-dd HH:mm'}}</span>\r\n              </div>\r\n              <div class=\"text\">\r\n                {{i.comment}}\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n        <form novalidate #f=\"ngForm\" (ngSubmit)=\"onSendPay(f, blog, $event)\" class=\"ui reply form\">\r\n          <div class=\"field\">\r\n            <label>留下你的大名</label>\r\n            <input type=\"text\" name=\"fromName\" placeholder=\"输入你的名字\" ngModel maxlength=\"16\" required />\r\n          </div>\r\n          <div class=\"field\">\r\n            <label>说点儿什么吧</label>\r\n            <textarea type=\"text\" name=\"comment\" placeholder=\"评论一下这篇博客\" ngModel maxlength=\"32\" required></textarea>\r\n          </div>\r\n\r\n          <button class=\"ui red fluid labeled icon button\">\r\n            <i class=\"dollar sign icon\"></i>打赏\r\n          </button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div-->\r\n\r\n  <div class=\"ui grid\">\r\n    <div class=\"column\">\r\n      <div class=\"ui raised segment\"  *ngFor=\"let blog of allBlog\" (click)=\"showBlogDetail(blog)\">\r\n        <div class=\"ui red ribbon label\">{{blog.cat}}</div>\r\n        <div class=\"item\">\r\n          <div class=\"content\">\r\n            <h3></h3>\r\n            <h3 class=\"ui red header\">{{blog.title}}</h3>\r\n            <div class=\"meta\">\r\n            </div>\r\n            <div class=\"description\">\r\n              <p [innerHTML]=\"blog.content\" class=\"rich-content\"></p>\r\n            </div>\r\n            <div class=\"extra\">\r\n              <div class=\"ui basic red label\"><i class=\"user icon\"></i>{{blog.authorInfo.name}}</div>\r\n              <div class=\"ui basic red label\"><i class=\"dollar sign icon\"></i>{{blog.value}}</div>\r\n              <div class=\"ui basic red label\">\r\n                <i class=\"comment outline icon\"></i>{{blog.payItems.length}}\r\n              </div>\r\n              <div class=\"ui basic label\">\r\n                <i class=\"calendar alternate outline icon\"></i>{{blog.ptime | date: 'yyyy-MM-dd HH:mm'}}\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blog_service__ = __webpack_require__("./src/app/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notification_notification_component__ = __webpack_require__("./src/app/notification/notification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__blog_blog_component__ = __webpack_require__("./src/app/blog/blog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = /** @class */ (function () {
    function HomeComponent(blogService, notification, ref, router) {
        this.blogService = blogService;
        this.notification = notification;
        this.ref = ref;
        this.router = router;
        this.allBlog = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getAllPost();
    };
    HomeComponent.prototype.getAllPost = function () {
        var _this = this;
        this.blogService.getAllPost().subscribe(function (result) {
            _this.allBlog = JSON.parse(result);
            console.log(_this.allBlog[0]);
            _this.ref.tick();
            $(".blog.segment").removeClass("loading");
        }, function (error) {
            _this.notification.show(error);
            $(".blog.segment").removeClass("loading");
        }, function () { return $(".blog.segment").removeClass("loading"); });
    };
    HomeComponent.prototype.showCreateTag = function () {
        $(".ui.tag.sidebar").sidebar("toggle");
    };
    HomeComponent.prototype.onSendPay = function (sendPayForm, blog, event) {
        var _this = this;
        if (sendPayForm.valid) {
            var params_1 = sendPayForm.value, target_1 = $(event.target), payItems_1 = blog.payItems;
            params_1.pid = blog.pid;
            target_1.addClass("loading");
            this.blogService.sendPay(params_1).subscribe(function (value) {
                sendPayForm.reset();
                target_1.removeClass("loading");
                params_1.from = value.from;
                params_1.ct = new Date().getTime();
                payItems_1.push(params_1);
                _this.ref.tick();
            }, function (error) { }, function () { });
        }
    };
    HomeComponent.prototype.showBlogDetail = function (blog) {
        this.blogService.setCurrentBlog(blog);
        this.router.navigate(['blog']);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            providers: [__WEBPACK_IMPORTED_MODULE_3__notification_notification_component__["a" /* NotificationComponent */], __WEBPACK_IMPORTED_MODULE_4__blog_blog_component__["a" /* BlogComponent */]],
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__blog_service__["a" /* BlogService */],
            __WEBPACK_IMPORTED_MODULE_3__notification_notification_component__["a" /* NotificationComponent */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ApplicationRef */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/mine/mine.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/mine/mine.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui vertical basic blog loading segment\">\r\n  <div class=\"ui grid\">\r\n    <div class=\"column\" *ngIf=\"allBlog && allBlog.length\">\r\n      <div class=\"ui raised segment\"  *ngFor=\"let blog of allBlog\" (click)=\"showBlogDetail(blog)\">\r\n        <div class=\"ui red ribbon label\">{{blog.cat}}</div>\r\n        <div class=\"item\">\r\n          <div class=\"content\">\r\n            <h3></h3>\r\n            <h3 class=\"ui red header\">{{blog.title}}</h3>\r\n            <div class=\"meta\">\r\n            </div>\r\n            <div class=\"description\">\r\n              <p [innerHTML]=\"blog.content\" class=\"rich-content\"></p>\r\n            </div>\r\n            <div class=\"extra\">\r\n              <div class=\"ui basic red label\"><i class=\"user icon\"></i>{{blog.authorInfo.name}}</div>\r\n              <div class=\"ui basic red label\"><i class=\"dollar sign icon\"></i>{{blog.value}}</div>\r\n\r\n              <div class=\"ui basic red label\">\r\n                <i class=\"comment outline icon\"></i>{{blog.payItems.length}}\r\n              </div>\r\n              <div class=\"ui basic label\">\r\n                <i class=\"calendar alternate outline icon\"></i>{{blog.ptime | date: 'yyyy-MM-dd HH:mm'}}\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"column\" *ngIf=\"allBlog && !allBlog.length\">\r\n        <div class=\"ui positive message\">\r\n          <div class=\"header\">\r\n            你还没有发布过博客\r\n          </div>\r\n          <p></p>\r\n          <a class=\"ui red button\" routerLink=\"/post\">写博文</a>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/mine/mine.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blog_service__ = __webpack_require__("./src/app/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notification_notification_component__ = __webpack_require__("./src/app/notification/notification.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MineComponent = /** @class */ (function () {
    function MineComponent(blogService, notification, ngZone, router) {
        this.blogService = blogService;
        this.notification = notification;
        this.ngZone = ngZone;
        this.router = router;
    }
    MineComponent.prototype.ngOnInit = function () {
        this.getAllPost();
    };
    MineComponent.prototype.getAllPost = function () {
        var _this = this;
        this.blogService.getAuthorPosts().subscribe(function (result) {
            _this.ngZone.runOutsideAngular(function () {
                _this.ngZone.run(function () {
                    _this.allBlog = JSON.parse(result);
                });
            });
            $(".blog.segment").removeClass("loading");
        }, function (error) {
            _this.notification.show(error);
            $(".blog.segment").removeClass("loading");
        }, function () { return $(".blog.segment").removeClass("loading"); });
    };
    MineComponent.prototype.showBlogDetail = function (blog) {
        this.blogService.setCurrentBlog(blog);
        this.router.navigate(['blog']);
    };
    MineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            providers: [__WEBPACK_IMPORTED_MODULE_3__notification_notification_component__["a" /* NotificationComponent */]],
            selector: 'app-mine',
            template: __webpack_require__("./src/app/mine/mine.component.html"),
            styles: [__webpack_require__("./src/app/mine/mine.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__blog_service__["a" /* BlogService */],
            __WEBPACK_IMPORTED_MODULE_3__notification_notification_component__["a" /* NotificationComponent */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], MineComponent);
    return MineComponent;
}());



/***/ }),

/***/ "./src/app/notification/notification.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/notification/notification.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui mini modal transition hidden\" id=\"notifyModal\">\r\n  <div class=\"header\">\r\n    提示消息\r\n  </div>\r\n  <div class=\"content\">\r\n    <p id=\"msgContent\"></p>\r\n  </div>\r\n  <div class=\"actions\">\r\n    <div class=\"ui primary button\" (click)=\"hide()\">\r\n      关闭\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/notification/notification.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotificationComponent = /** @class */ (function () {
    function NotificationComponent() {
    }
    NotificationComponent.prototype.ngOnInit = function () {
    };
    NotificationComponent.prototype.show = function (message) {
        $("#notifyModal #msgContent").text(message);
        $("#notifyModal").modal("show");
    };
    NotificationComponent.prototype.hide = function () {
        $("#notifyModal").modal("hide");
    };
    NotificationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-notification',
            template: __webpack_require__("./src/app/notification/notification.component.html"),
            styles: [__webpack_require__("./src/app/notification/notification.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./src/app/post/post.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/post/post.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui raised segment\">\n  <form class=\"ui form\" novalidate #f=\"ngForm\" (ngSubmit)=\"onPostBlog(f)\" id=\"blogForm\">\n    <div class=\"field\">\n      <label>标题</label>\n      <input required ngModel name=\"title\" maxlength=\"64\"/>\n    </div>\n    <div class=\"field\">\n      <label>内容</label>\n      <textarea></textarea>\n    </div>\n    <div class=\"field\">\n      <label>标签</label>\n      <div class=\"ui tag labels\">\n        <a class=\"ui label\" *ngFor=\"let name of catNames; let i = index\" (click)=\"selectedCatIndex=i\" [ngClass]=\"{'red': selectedCatIndex==i }\">{{name}}</a>\n      </div>\n    </div>\n    <div class=\"ui two buttons\">\n      <button class=\"ui button\" type=\"reset\">重置</button>\n      <div class=\"or\"></div>\n      <button class=\"ui red button\" type=\"submit\">发布</button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/post/post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blog_service__ = __webpack_require__("./src/app/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notification_notification_component__ = __webpack_require__("./src/app/notification/notification.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PostComponent = /** @class */ (function () {
    function PostComponent(blogService, notification, router, userService) {
        this.blogService = blogService;
        this.notification = notification;
        this.router = router;
        this.userService = userService;
        this.catNames = ["情感", "技术", "社会", "生活", "侃大山", "交友", "相亲", "旅游"];
        this.selectedCatIndex = 0;
    }
    PostComponent.prototype.ngOnInit = function () {
    };
    PostComponent.prototype.ngAfterViewInit = function () {
        tinymce.init({
            selector: 'textarea',
            height: 500,
            plugins: 'print preview fullpage searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount imagetools contextmenu colorpicker textpattern help',
            toolbar1: 'formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat',
            image_advtab: true,
            language: 'zh_CN'
        });
    };
    PostComponent.prototype.onPostBlog = function (blogForm) {
        var _this = this;
        var content = tinymce.activeEditor.getContent();
        this.userService.getAuthor().subscribe(function (value) {
            console.log(value);
            if (value == 'null') {
                _this.notification.show("请先注册");
                $(".ui.register.sidebar").sidebar("toggle");
            }
            else {
                if (blogForm.valid && content) {
                    var params = blogForm.value;
                    params.cat = _this.catNames[_this.selectedCatIndex];
                    params.content = content;
                    $("#blogForm").addClass('loading');
                    _this.blogService.createPost(params).subscribe(function (value) { }, function (error) {
                        _this.notification.show(error);
                        $("#blogForm").removeClass('loading');
                        $(".ui.register.sidebar").sidebar("toggle");
                    }, function () {
                        window.location.href = "/mine";
                    });
                }
            }
        });
    };
    PostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            providers: [__WEBPACK_IMPORTED_MODULE_4__notification_notification_component__["a" /* NotificationComponent */]],
            selector: 'app-post',
            template: __webpack_require__("./src/app/post/post.component.html"),
            styles: [__webpack_require__("./src/app/post/post.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__blog_service__["a" /* BlogService */],
            __WEBPACK_IMPORTED_MODULE_4__notification_notification_component__["a" /* NotificationComponent */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/tag.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TagService = /** @class */ (function () {
    function TagService() {
    }
    TagService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], TagService);
    return TagService;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nebpay__ = __webpack_require__("./node_modules/nebpay/lib/nebPay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nebpay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_nebpay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nebulas__ = __webpack_require__("./node_modules/nebulas/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nebulas___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_nebulas__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = /** @class */ (function () {
    function UserService() {
        this.dAppAddress = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].dAppAddress;
        this.nebPay = new __WEBPACK_IMPORTED_MODULE_3_nebpay__();
        this.neb = new __WEBPACK_IMPORTED_MODULE_4_nebulas__["Neb"]();
    }
    UserService.prototype.ngOnInit = function () {
    };
    UserService.prototype.createAuthor = function (params) {
        var _this = this;
        var that = this, value = "0", callFunction = "createAuthor", callArgs = JSON.stringify([params.name, params.url, params.signature]);
        this.neb.setRequest(new __WEBPACK_IMPORTED_MODULE_4_nebulas__["HttpRequest"](__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].http_request_url));
        var obs = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.nebPay.call(_this.dAppAddress, value, callFunction, callArgs, {
                listener: function (res) {
                    console.log("交易提交成功");
                    var txHash = res.txhash;
                    that.intervalQuery = setInterval(function () {
                        that.neb.api.getTransactionReceipt(txHash).then(function (res) {
                            console.log(res);
                            if (res.status === 1) {
                                clearInterval(that.intervalQuery);
                                console.log("交易完成");
                                observer.complete();
                            }
                            if (res.status === 0) {
                                clearInterval(that.intervalQuery);
                                observer.error(res.execute_result);
                            }
                            if (res.status === 2) {
                                clearInterval(that.intervalQuery);
                                observer.error("NAS余额不足，请充值后再试");
                            }
                        });
                    }, 5000);
                }
            });
        });
        return obs;
    };
    UserService.prototype.getAuthor = function () {
        var _this = this;
        var value = "0", nonce = "0", gas_price = "1000000", gas_limit = "2000000", contract = {
            "function": "getAuthorInfo",
            "args": "[]"
        }, that = this, obs = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.neb.setRequest(new __WEBPACK_IMPORTED_MODULE_4_nebulas__["HttpRequest"](__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].http_request_url));
            _this.nebPay.simulateCall(_this.dAppAddress, "0", 'getUserAddr', "", {
                listener: function (res) {
                    var result = res.result, curUser;
                    if (result === 'null') {
                        observer.error("似乎没有安装钱包插件，请先装插件再使用");
                    }
                    else {
                        try {
                            curUser = JSON.parse(result);
                            that.neb.api.call(curUser, that.dAppAddress, value, nonce, gas_price, gas_limit, contract).then(function (res) {
                                console.log("读取信息成功");
                                observer.next(res.result);
                            }).catch(function () {
                                observer.error("读取博客列表失败");
                            });
                        }
                        catch (err) {
                            observer.error("获取用户钱包地址出错");
                        }
                    }
                }
            });
        });
        return obs;
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    http_request_url: 'https://testnet.nebulas.io',
    dAppAddress: "n1rNrSa5YRSYs1HxdsSYybunB8oHVCMETSp"
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map