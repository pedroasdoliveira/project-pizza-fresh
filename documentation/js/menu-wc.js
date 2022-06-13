'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">pizza-fresh-server documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-d4e6f8eb9d77b03aa0d2393244f9e211181c798f5f6b704a98a1414640095017e3a8c94ccbe8b61496a285da304ed6c6dd9f7c529584e6f86f8b147196630fda"' : 'data-target="#xs-controllers-links-module-AppModule-d4e6f8eb9d77b03aa0d2393244f9e211181c798f5f6b704a98a1414640095017e3a8c94ccbe8b61496a285da304ed6c6dd9f7c529584e6f86f8b147196630fda"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-d4e6f8eb9d77b03aa0d2393244f9e211181c798f5f6b704a98a1414640095017e3a8c94ccbe8b61496a285da304ed6c6dd9f7c529584e6f86f8b147196630fda"' :
                                            'id="xs-controllers-links-module-AppModule-d4e6f8eb9d77b03aa0d2393244f9e211181c798f5f6b704a98a1414640095017e3a8c94ccbe8b61496a285da304ed6c6dd9f7c529584e6f86f8b147196630fda"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-d4e6f8eb9d77b03aa0d2393244f9e211181c798f5f6b704a98a1414640095017e3a8c94ccbe8b61496a285da304ed6c6dd9f7c529584e6f86f8b147196630fda"' : 'data-target="#xs-injectables-links-module-AppModule-d4e6f8eb9d77b03aa0d2393244f9e211181c798f5f6b704a98a1414640095017e3a8c94ccbe8b61496a285da304ed6c6dd9f7c529584e6f86f8b147196630fda"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-d4e6f8eb9d77b03aa0d2393244f9e211181c798f5f6b704a98a1414640095017e3a8c94ccbe8b61496a285da304ed6c6dd9f7c529584e6f86f8b147196630fda"' :
                                        'id="xs-injectables-links-module-AppModule-d4e6f8eb9d77b03aa0d2393244f9e211181c798f5f6b704a98a1414640095017e3a8c94ccbe8b61496a285da304ed6c6dd9f7c529584e6f86f8b147196630fda"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-a7b1b1ab760e10b624697c038996cf692122e1c3803df3ef408f40502353ed84e2ed33a0a3045d2c232048444dca5adcaf168e5144eaa5fa263177d3a74a8e99"' : 'data-target="#xs-controllers-links-module-AuthModule-a7b1b1ab760e10b624697c038996cf692122e1c3803df3ef408f40502353ed84e2ed33a0a3045d2c232048444dca5adcaf168e5144eaa5fa263177d3a74a8e99"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-a7b1b1ab760e10b624697c038996cf692122e1c3803df3ef408f40502353ed84e2ed33a0a3045d2c232048444dca5adcaf168e5144eaa5fa263177d3a74a8e99"' :
                                            'id="xs-controllers-links-module-AuthModule-a7b1b1ab760e10b624697c038996cf692122e1c3803df3ef408f40502353ed84e2ed33a0a3045d2c232048444dca5adcaf168e5144eaa5fa263177d3a74a8e99"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-a7b1b1ab760e10b624697c038996cf692122e1c3803df3ef408f40502353ed84e2ed33a0a3045d2c232048444dca5adcaf168e5144eaa5fa263177d3a74a8e99"' : 'data-target="#xs-injectables-links-module-AuthModule-a7b1b1ab760e10b624697c038996cf692122e1c3803df3ef408f40502353ed84e2ed33a0a3045d2c232048444dca5adcaf168e5144eaa5fa263177d3a74a8e99"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-a7b1b1ab760e10b624697c038996cf692122e1c3803df3ef408f40502353ed84e2ed33a0a3045d2c232048444dca5adcaf168e5144eaa5fa263177d3a74a8e99"' :
                                        'id="xs-injectables-links-module-AuthModule-a7b1b1ab760e10b624697c038996cf692122e1c3803df3ef408f40502353ed84e2ed33a0a3045d2c232048444dca5adcaf168e5144eaa5fa263177d3a74a8e99"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrderModule.html" data-type="entity-link" >OrderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-OrderModule-86c9a47c90cf4042c6e70d09c3b2b7f93aab1efa62dab17383c91e99664f315a0ff8aaa1b88e369a8d63f6d23df6a48b9ded7a79d1c81da34351ee0adcb26a9d"' : 'data-target="#xs-controllers-links-module-OrderModule-86c9a47c90cf4042c6e70d09c3b2b7f93aab1efa62dab17383c91e99664f315a0ff8aaa1b88e369a8d63f6d23df6a48b9ded7a79d1c81da34351ee0adcb26a9d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-OrderModule-86c9a47c90cf4042c6e70d09c3b2b7f93aab1efa62dab17383c91e99664f315a0ff8aaa1b88e369a8d63f6d23df6a48b9ded7a79d1c81da34351ee0adcb26a9d"' :
                                            'id="xs-controllers-links-module-OrderModule-86c9a47c90cf4042c6e70d09c3b2b7f93aab1efa62dab17383c91e99664f315a0ff8aaa1b88e369a8d63f6d23df6a48b9ded7a79d1c81da34351ee0adcb26a9d"' }>
                                            <li class="link">
                                                <a href="controllers/OrderController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-OrderModule-86c9a47c90cf4042c6e70d09c3b2b7f93aab1efa62dab17383c91e99664f315a0ff8aaa1b88e369a8d63f6d23df6a48b9ded7a79d1c81da34351ee0adcb26a9d"' : 'data-target="#xs-injectables-links-module-OrderModule-86c9a47c90cf4042c6e70d09c3b2b7f93aab1efa62dab17383c91e99664f315a0ff8aaa1b88e369a8d63f6d23df6a48b9ded7a79d1c81da34351ee0adcb26a9d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-OrderModule-86c9a47c90cf4042c6e70d09c3b2b7f93aab1efa62dab17383c91e99664f315a0ff8aaa1b88e369a8d63f6d23df6a48b9ded7a79d1c81da34351ee0adcb26a9d"' :
                                        'id="xs-injectables-links-module-OrderModule-86c9a47c90cf4042c6e70d09c3b2b7f93aab1efa62dab17383c91e99664f315a0ff8aaa1b88e369a8d63f6d23df6a48b9ded7a79d1c81da34351ee0adcb26a9d"' }>
                                        <li class="link">
                                            <a href="injectables/OrderService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' : 'data-target="#xs-injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' :
                                        'id="xs-injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductModule.html" data-type="entity-link" >ProductModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ProductModule-68511f17069920f46e13ef962f169e36c78b4b707cdfbfb09ddd101a6985a62c5214013d3208ddb64c4e8708e0c242dc7db6b14565387e1226f493e57e64d378"' : 'data-target="#xs-controllers-links-module-ProductModule-68511f17069920f46e13ef962f169e36c78b4b707cdfbfb09ddd101a6985a62c5214013d3208ddb64c4e8708e0c242dc7db6b14565387e1226f493e57e64d378"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProductModule-68511f17069920f46e13ef962f169e36c78b4b707cdfbfb09ddd101a6985a62c5214013d3208ddb64c4e8708e0c242dc7db6b14565387e1226f493e57e64d378"' :
                                            'id="xs-controllers-links-module-ProductModule-68511f17069920f46e13ef962f169e36c78b4b707cdfbfb09ddd101a6985a62c5214013d3208ddb64c4e8708e0c242dc7db6b14565387e1226f493e57e64d378"' }>
                                            <li class="link">
                                                <a href="controllers/ProductController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ProductModule-68511f17069920f46e13ef962f169e36c78b4b707cdfbfb09ddd101a6985a62c5214013d3208ddb64c4e8708e0c242dc7db6b14565387e1226f493e57e64d378"' : 'data-target="#xs-injectables-links-module-ProductModule-68511f17069920f46e13ef962f169e36c78b4b707cdfbfb09ddd101a6985a62c5214013d3208ddb64c4e8708e0c242dc7db6b14565387e1226f493e57e64d378"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductModule-68511f17069920f46e13ef962f169e36c78b4b707cdfbfb09ddd101a6985a62c5214013d3208ddb64c4e8708e0c242dc7db6b14565387e1226f493e57e64d378"' :
                                        'id="xs-injectables-links-module-ProductModule-68511f17069920f46e13ef962f169e36c78b4b707cdfbfb09ddd101a6985a62c5214013d3208ddb64c4e8708e0c242dc7db6b14565387e1226f493e57e64d378"' }>
                                        <li class="link">
                                            <a href="injectables/ProductService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TableModule.html" data-type="entity-link" >TableModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-TableModule-5f8bf351d295c67a6e9e845041e18d5ecce1e3f04d168a533240293242dd659f063616068cf6a8c396969ac8619894865d19d2f710089a69230bf15db57ff186"' : 'data-target="#xs-controllers-links-module-TableModule-5f8bf351d295c67a6e9e845041e18d5ecce1e3f04d168a533240293242dd659f063616068cf6a8c396969ac8619894865d19d2f710089a69230bf15db57ff186"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TableModule-5f8bf351d295c67a6e9e845041e18d5ecce1e3f04d168a533240293242dd659f063616068cf6a8c396969ac8619894865d19d2f710089a69230bf15db57ff186"' :
                                            'id="xs-controllers-links-module-TableModule-5f8bf351d295c67a6e9e845041e18d5ecce1e3f04d168a533240293242dd659f063616068cf6a8c396969ac8619894865d19d2f710089a69230bf15db57ff186"' }>
                                            <li class="link">
                                                <a href="controllers/TableController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TableController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TableModule-5f8bf351d295c67a6e9e845041e18d5ecce1e3f04d168a533240293242dd659f063616068cf6a8c396969ac8619894865d19d2f710089a69230bf15db57ff186"' : 'data-target="#xs-injectables-links-module-TableModule-5f8bf351d295c67a6e9e845041e18d5ecce1e3f04d168a533240293242dd659f063616068cf6a8c396969ac8619894865d19d2f710089a69230bf15db57ff186"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TableModule-5f8bf351d295c67a6e9e845041e18d5ecce1e3f04d168a533240293242dd659f063616068cf6a8c396969ac8619894865d19d2f710089a69230bf15db57ff186"' :
                                        'id="xs-injectables-links-module-TableModule-5f8bf351d295c67a6e9e845041e18d5ecce1e3f04d168a533240293242dd659f063616068cf6a8c396969ac8619894865d19d2f710089a69230bf15db57ff186"' }>
                                        <li class="link">
                                            <a href="injectables/TableService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TableService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UserModule-042534ce8eebaf4ee3fffe968ab9fef717df72fecf205ef0d9c5354c59bae26e4ba693088bd912adff28a3410c10389ee13d05e2055f48d0e178952759da5923"' : 'data-target="#xs-controllers-links-module-UserModule-042534ce8eebaf4ee3fffe968ab9fef717df72fecf205ef0d9c5354c59bae26e4ba693088bd912adff28a3410c10389ee13d05e2055f48d0e178952759da5923"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-042534ce8eebaf4ee3fffe968ab9fef717df72fecf205ef0d9c5354c59bae26e4ba693088bd912adff28a3410c10389ee13d05e2055f48d0e178952759da5923"' :
                                            'id="xs-controllers-links-module-UserModule-042534ce8eebaf4ee3fffe968ab9fef717df72fecf205ef0d9c5354c59bae26e4ba693088bd912adff28a3410c10389ee13d05e2055f48d0e178952759da5923"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-042534ce8eebaf4ee3fffe968ab9fef717df72fecf205ef0d9c5354c59bae26e4ba693088bd912adff28a3410c10389ee13d05e2055f48d0e178952759da5923"' : 'data-target="#xs-injectables-links-module-UserModule-042534ce8eebaf4ee3fffe968ab9fef717df72fecf205ef0d9c5354c59bae26e4ba693088bd912adff28a3410c10389ee13d05e2055f48d0e178952759da5923"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-042534ce8eebaf4ee3fffe968ab9fef717df72fecf205ef0d9c5354c59bae26e4ba693088bd912adff28a3410c10389ee13d05e2055f48d0e178952759da5923"' :
                                        'id="xs-injectables-links-module-UserModule-042534ce8eebaf4ee3fffe968ab9fef717df72fecf205ef0d9c5354c59bae26e4ba693088bd912adff28a3410c10389ee13d05e2055f48d0e178952759da5923"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/OrderController.html" data-type="entity-link" >OrderController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ProductController.html" data-type="entity-link" >ProductController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TableController.html" data-type="entity-link" >TableController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link" >UserController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateOrderDto.html" data-type="entity-link" >CreateOrderDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateOrderProductDto.html" data-type="entity-link" >CreateOrderProductDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateProductDto.html" data-type="entity-link" >CreateProductDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTableDto.html" data-type="entity-link" >CreateTableDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginResponseDto.html" data-type="entity-link" >LoginResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Order.html" data-type="entity-link" >Order</a>
                            </li>
                            <li class="link">
                                <a href="classes/Product.html" data-type="entity-link" >Product</a>
                            </li>
                            <li class="link">
                                <a href="classes/Table.html" data-type="entity-link" >Table</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateProductDto.html" data-type="entity-link" >UpdateProductDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/updateTableDto.html" data-type="entity-link" >updateTableDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrderService.html" data-type="entity-link" >OrderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrismaService.html" data-type="entity-link" >PrismaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductService.html" data-type="entity-link" >ProductService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TableService.html" data-type="entity-link" >TableService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});