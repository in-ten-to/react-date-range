'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultInputRanges = exports.defaultStaticRanges = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.createStaticRanges = createStaticRanges;

var _isSameDay = require('date-fns/isSameDay');

var _isSameDay2 = _interopRequireDefault(_isSameDay);

var _endOfWeek = require('date-fns/endOfWeek');

var _endOfWeek2 = _interopRequireDefault(_endOfWeek);

var _startOfWeek = require('date-fns/startOfWeek');

var _startOfWeek2 = _interopRequireDefault(_startOfWeek);

var _addMonths = require('date-fns/addMonths');

var _addMonths2 = _interopRequireDefault(_addMonths);

var _endOfMonth = require('date-fns/endOfMonth');

var _endOfMonth2 = _interopRequireDefault(_endOfMonth);

var _startOfMonth = require('date-fns/startOfMonth');

var _startOfMonth2 = _interopRequireDefault(_startOfMonth);

var _startOfDay = require('date-fns/startOfDay');

var _startOfDay2 = _interopRequireDefault(_startOfDay);

var _endOfDay = require('date-fns/endOfDay');

var _endOfDay2 = _interopRequireDefault(_endOfDay);

var _addDays = require('date-fns/addDays');

var _addDays2 = _interopRequireDefault(_addDays);

var _fr = require('date-fns/locale/fr');

var _fr2 = _interopRequireDefault(_fr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dateOptions = { locale: _fr2.default };

function defineds() {
  return {
    lastSevenDays: (0, _startOfDay2.default)((0, _addDays2.default)(new Date(), -6), dateOptions),
    lastThirtyDays: (0, _startOfDay2.default)((0, _addDays2.default)(new Date(), -29), dateOptions),
    startOfWeek: (0, _startOfWeek2.default)(new Date(), dateOptions),
    endOfWeek: (0, _endOfWeek2.default)(new Date() + 1, dateOptions),
    startOfLastWeek: (0, _startOfWeek2.default)((0, _addDays2.default)(new Date(), -7), dateOptions),
    endOfLastWeek: (0, _endOfWeek2.default)((0, _addDays2.default)(new Date() + 1, -7), dateOptions),
    startOfToday: (0, _startOfDay2.default)(new Date()),
    endOfToday: (0, _endOfDay2.default)(new Date()),
    startOfYesterday: (0, _startOfDay2.default)((0, _addDays2.default)(new Date(), -1)),
    endOfYesterday: (0, _endOfDay2.default)((0, _addDays2.default)(new Date(), -1)),
    startOfMonth: (0, _startOfMonth2.default)(new Date()),
    endOfMonth: (0, _endOfMonth2.default)(new Date()),
    startOfLastMonth: (0, _startOfMonth2.default)((0, _addMonths2.default)(new Date(), -1)),
    endOfLastMonth: (0, _endOfMonth2.default)((0, _addMonths2.default)(new Date(), -1))
  };
}

var staticRangeHandler = {
  range: {},
  isSelected: function isSelected(range) {
    var definedRange = this.range();
    return (0, _isSameDay2.default)(range.startDate, definedRange.startDate) && (0, _isSameDay2.default)(range.endDate, definedRange.endDate);
  }
};

function createStaticRanges(ranges) {
  return ranges.map(function (range) {
    return _extends({}, staticRangeHandler, range);
  });
}

var defaultStaticRanges = exports.defaultStaticRanges = createStaticRanges([{
  label: "Aujourd'hui",
  range: function range() {
    return {
      startDate: defineds().startOfToday,
      endDate: defineds().endOfToday
    };
  },
  id: 'today'
}, {
  label: 'Hier',
  range: function range() {
    return {
      startDate: defineds().startOfYesterday,
      endDate: defineds().endOfYesterday
    };
  },
  id: 'yesterday'
}, {
  label: 'les 7 derniers jours',
  range: function range() {
    return {
      startDate: defineds().lastSevenDays,
      endDate: defineds().endOfToday
    };
  },
  id: 'last_7_days'
}, {
  label: 'les 30 derniers jours',
  range: function range() {
    return {
      startDate: defineds().lastThirtyDays,
      endDate: defineds().endOfToday
    };
  },
  id: 'last_30_days'
}, {
  label: 'Cette semaine',
  range: function range() {
    return {
      startDate: defineds().startOfWeek,
      endDate: defineds().endOfWeek
    };
  },
  id: 'current_week'
}, {
  label: 'La semaine dernière',
  range: function range() {
    return {
      startDate: defineds().startOfLastWeek,
      endDate: defineds().endOfLastWeek
    };
  },
  id: 'last_week'
}, {
  label: 'Ce mois-ci',
  range: function range() {
    return {
      startDate: defineds().startOfMonth,
      endDate: defineds().endOfMonth
    };
  },
  id: 'current_month'
}, {
  label: 'Le mois dernier',
  range: function range() {
    return {
      startDate: defineds().startOfLastMonth,
      endDate: defineds().endOfLastMonth
    };
  },
  id: 'last_month'
}]);

var defaultInputRanges = exports.defaultInputRanges = [];
