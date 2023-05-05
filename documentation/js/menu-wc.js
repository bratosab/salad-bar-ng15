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
                    <a href="index.html" data-type="index-link">salad-bar documentation</a>
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
                                            'data-target="#components-links-module-AppModule-d890a4df950e0beae892a300d16876aa6cc0c3e380b2e8db6dddf406d9a6bdc4918fdf4e9e245aa8e6680f0627a7171aaa6885564228954aa37c71e322d90a70"' : 'data-target="#xs-components-links-module-AppModule-d890a4df950e0beae892a300d16876aa6cc0c3e380b2e8db6dddf406d9a6bdc4918fdf4e9e245aa8e6680f0627a7171aaa6885564228954aa37c71e322d90a70"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-d890a4df950e0beae892a300d16876aa6cc0c3e380b2e8db6dddf406d9a6bdc4918fdf4e9e245aa8e6680f0627a7171aaa6885564228954aa37c71e322d90a70"' :
                                            'id="xs-components-links-module-AppModule-d890a4df950e0beae892a300d16876aa6cc0c3e380b2e8db6dddf406d9a6bdc4918fdf4e9e245aa8e6680f0627a7171aaa6885564228954aa37c71e322d90a70"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OrderFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderFormComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/KitchenModule.html" data-type="entity-link" >KitchenModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-KitchenModule-6bd18089455e3d4f69bc9fa5157678dc7ef933108ee9c19d71765f0d1c4b4434b1adaaaa7289c6daad688f3ac92edbf5094edb9568bc84f6b43c285a06d94afc"' : 'data-target="#xs-components-links-module-KitchenModule-6bd18089455e3d4f69bc9fa5157678dc7ef933108ee9c19d71765f0d1c4b4434b1adaaaa7289c6daad688f3ac92edbf5094edb9568bc84f6b43c285a06d94afc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-KitchenModule-6bd18089455e3d4f69bc9fa5157678dc7ef933108ee9c19d71765f0d1c4b4434b1adaaaa7289c6daad688f3ac92edbf5094edb9568bc84f6b43c285a06d94afc"' :
                                            'id="xs-components-links-module-KitchenModule-6bd18089455e3d4f69bc9fa5157678dc7ef933108ee9c19d71765f0d1c4b4434b1adaaaa7289c6daad688f3ac92edbf5094edb9568bc84f6b43c285a06d94afc"' }>
                                            <li class="link">
                                                <a href="components/KitchenComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >KitchenComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/KitchenRoutingModule.html" data-type="entity-link" >KitchenRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SaladModule.html" data-type="entity-link" >SaladModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SaladModule-4e181e68ea2f052f06f7a4dd292f12de8015d26cafe2ea7eb8442fca760fb5de93512ba179337f8aad70522aaccd5b16eaaca1fa16c21b3bd1f5df54e0772f9b"' : 'data-target="#xs-components-links-module-SaladModule-4e181e68ea2f052f06f7a4dd292f12de8015d26cafe2ea7eb8442fca760fb5de93512ba179337f8aad70522aaccd5b16eaaca1fa16c21b3bd1f5df54e0772f9b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SaladModule-4e181e68ea2f052f06f7a4dd292f12de8015d26cafe2ea7eb8442fca760fb5de93512ba179337f8aad70522aaccd5b16eaaca1fa16c21b3bd1f5df54e0772f9b"' :
                                            'id="xs-components-links-module-SaladModule-4e181e68ea2f052f06f7a4dd292f12de8015d26cafe2ea7eb8442fca760fb5de93512ba179337f8aad70522aaccd5b16eaaca1fa16c21b3bd1f5df54e0772f9b"' }>
                                            <li class="link">
                                                <a href="components/SaladComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SaladComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ToppingListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ToppingListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SaladRoutingModule.html" data-type="entity-link" >SaladRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedMaterialModule.html" data-type="entity-link" >SharedMaterialModule</a>
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
                                    <a href="injectables/OrderService.html" data-type="entity-link" >OrderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RouterEffects.html" data-type="entity-link" >RouterEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SaladEffects.html" data-type="entity-link" >SaladEffects</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AppState.html" data-type="entity-link" >AppState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NamePrice.html" data-type="entity-link" >NamePrice</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SaladState.html" data-type="entity-link" >SaladState</a>
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
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
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