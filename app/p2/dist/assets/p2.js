"use strict";



define('p2/adapters/application', ['exports', 'emberfire/adapters/firebase'], function (exports, _firebase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _firebase.default.extend({});
});
define('p2/app', ['exports', 'p2/resolver', 'ember-load-initializers', 'p2/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('p2/components/test-form', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
define('p2/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('p2/controllers/detalles-examen', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Controller.extend({
		actions: {
			save: function save() {
				this.store.createRecord();
			}
		}
	});
});
define('p2/helpers/app-version', ['exports', 'p2/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  var version = _environment.default.APP.version;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (hash.hideSha) {
      return version.match(_regexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_regexp.shaRegExp)[0];
    }

    return version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('p2/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('p2/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('p2/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'p2/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _config$APP = _environment.default.APP,
      name = _config$APP.name,
      version = _config$APP.version;
  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('p2/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('p2/initializers/data-adapter', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('p2/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('p2/initializers/emberfire', ['exports', 'emberfire/initializers/emberfire'], function (exports, _emberfire) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberfire.default;
});
define('p2/initializers/export-application-global', ['exports', 'p2/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('p2/initializers/injectStore', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('p2/initializers/store', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('p2/initializers/transforms', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("p2/instance-initializers/ember-data", ["exports", "ember-data/instance-initializers/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('p2/models/options', ['exports', 'ember-data'], function (exports, _emberData) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = _emberData.default.Model.extend({
		nombre: _emberData.default.attr('string'),
		correcta: _emberData.default.attr('string'),
		pregunta: _emberData.default.belongsTo('question')

	});
});
define('p2/models/question', ['exports', 'ember-data'], function (exports, _emberData) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = _emberData.default.Model.extend({
		nombre: _emberData.default.attr('string'),
		examen: _emberData.default.belongTo('test'),
		opcion: _emberData.default.hasMany('option')

	});
});
define('p2/models/test', ['exports', 'ember-data'], function (exports, _emberData) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = _emberData.default.Model.extend({
		nombre: _emberData.default.attr('string'),
		fecha: _emberData.default.attr('date'),

		pregunta: _emberData.default.hasMany('question')
	});
});
define('p2/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('p2/router', ['exports', 'p2/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('lista-examenes');
    this.route('detalles-examen');
  });

  exports.default = Router;
});
define('p2/routes/detalles-examen', ['exports'], function (exports) {
			'use strict';

			Object.defineProperty(exports, "__esModule", {
						value: true
			});
			exports.default = Ember.Route.extend({
						model: function model() {
									var test = this.get('store').createRecord('test', {});
									return test;
						}
			});
});
define('p2/routes/lista-examenes', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Route.extend({
		model: function model() {
			return this.store.findAll('test');
		}
	});
});
define('p2/serializers/application', ['exports', 'emberfire/serializers/firebase'], function (exports, _firebase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _firebase.default.extend({});
});
define('p2/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define('p2/services/firebase-app', ['exports', 'emberfire/services/firebase-app'], function (exports, _firebaseApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _firebaseApp.default;
});
define('p2/services/firebase', ['exports', 'emberfire/services/firebase'], function (exports, _firebase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _firebase.default;
});
define("p2/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "28M5y2vv", "block": "{\"statements\":[[11,\"nav\",[]],[13],[0,\"\\n\\t\"],[11,\"ul\",[]],[13],[0,\"\\n\\t\\t\"],[11,\"li\",[]],[13],[0,\"\\n\\t\\t\\t\"],[6,[\"link-to\"],[\"detalles-examen\"],null,{\"statements\":[[0,\"Ver detalles\"]],\"locals\":[]},null],[0,\"\\n\\t\\t\"],[14],[0,\"\\n\\t\"],[14],[0,\"\\n\"],[14],[0,\"\\n\"],[1,[26,[\"outlet\"]],false],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "p2/templates/application.hbs" } });
});
define("p2/templates/components/test-form", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "yoeO6gMN", "block": "{\"statements\":[[0,\"\\nnombre\\n\"],[1,[33,[\"input\"],null,[[\"value\"],[[28,[\"test\",\"nombre\"]]]]],false],[0,\"\\nfecha\\n\"],[1,[33,[\"input\"],null,[[\"type\",\"value\"],[\"datetime-local\",[28,[\"test\",\"fecha\"]]]]],false],[0,\"\\n\\nPregunta\\n\"],[1,[33,[\"input\"],null,[[\"value\"],[[28,[\"test\",\"question\",\"nombre\"]]]]],false],[0,\"\\n\\nOpciones\\n\\n\"],[1,[33,[\"input\"],null,[[\"value\"],[[28,[\"test\",\"question\",\"option\"]]]]],false],[0,\"\\n\"],[1,[33,[\"input\"],null,[[\"value\"],[[28,[\"test\",\"question\",\"option\"]]]]],false],[0,\"\\n\"],[1,[33,[\"input\"],null,[[\"value\"],[[28,[\"test\",\"question\",\"option\"]]]]],false],[0,\"\\n\"],[1,[33,[\"input\"],null,[[\"value\"],[[28,[\"test\",\"question\",\"option\"]]]]],false],[0,\"\\n\\n\\n\"],[11,\"button\",[]],[5,[\"action\"],[[28,[null]],\"save\"]],[13],[0,\"Guardar\"],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "p2/templates/components/test-form.hbs" } });
});
define("p2/templates/detalles-examen", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "V9JD0vd7", "block": "{\"statements\":[[1,[33,[\"test-form\"],null,[[\"model\"],[[28,[\"test\"]]]]],false],[0,\"\\n\\n\"],[6,[\"each\"],[[28,[\"test\"]]],null,{\"statements\":[[0,\"\\t\"],[1,[28,[\"examen\",\"nombre\"]],false],[0,\"\\n\\t\"],[1,[28,[\"examen\",\"fecha\"]],false],[0,\"\\n\"]],\"locals\":[\"examen\"]},null]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "p2/templates/detalles-examen.hbs" } });
});
define("p2/templates/lista-examenes", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "9qoVeO6u", "block": "{\"statements\":[[1,[26,[\"outlet\"]],false],[0,\"\\n\\n\"],[11,\"h3\",[]],[13],[0,\"Aqui se mostraran todos los examenes\"],[14],[0,\"\\n\"],[11,\"ul\",[]],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"model\"]]],null,{\"statements\":[[0,\"\\t\\t\"],[11,\"li\",[]],[13],[0,\"\\n\\t\\t\\t\"],[6,[\"link-to\"],[\"detalles-examen\",[28,[\"test\",\"nombre\"]]],[[\"tagName\"],[\"button\"]],{\"statements\":[[0,\" \"],[1,[28,[\"test\",\"nombre\"]],false]],\"locals\":[]},null],[0,\"\\n\\t\\t\"],[14],[0,\"\\n\"]],\"locals\":[\"test\"]},null],[14],[0,\"\\n\\n\\n\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "p2/templates/lista-examenes.hbs" } });
});
define('p2/torii-providers/firebase', ['exports', 'emberfire/torii-providers/firebase'], function (exports, _firebase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _firebase.default;
});


define('p2/config/environment', ['ember'], function(Ember) {
  var prefix = 'p2';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("p2/app")["default"].create({"name":"p2","version":"0.0.0+cbd4cee1"});
}
//# sourceMappingURL=p2.map
