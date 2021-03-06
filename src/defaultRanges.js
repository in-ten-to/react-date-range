import {
  addDays,
  endOfDay,
  startOfDay,
  startOfMonth,
  endOfMonth,
  addMonths,
  startOfWeek,
  endOfWeek,
  isSameDay,
} from 'date-fns';

import fr from 'date-fns/locale/fr';
const dateOptions = { locale: fr };

export function defineds {
  return {
    lastSevenDays: startOfDay(addDays(new Date(), -6), dateOptions),
    lastThirtyDays: startOfDay(addDays(new Date(), -29), dateOptions),
    startOfWeek: startOfWeek(new Date(), dateOptions),
    endOfWeek: endOfWeek(new Date() + 1, dateOptions),
    startOfLastWeek: startOfWeek(addDays(new Date(), -7), dateOptions),
    endOfLastWeek: endOfWeek(addDays(new Date() + 1, -7), dateOptions),
    startOfToday: startOfDay(new Date()),
    endOfToday: endOfDay(new Date()),
    startOfYesterday: startOfDay(addDays(new Date(), -1)),
    endOfYesterday: endOfDay(addDays(new Date(), -1)),
    startOfMonth: startOfMonth(new Date()),
    endOfMonth: endOfMonth(new Date()),
    startOfLastMonth: startOfMonth(addMonths(new Date(), -1)),
    endOfLastMonth: endOfMonth(addMonths(new Date(), -1)),
  };
}

const staticRangeHandler = {
  range: {},
  isSelected(range) {
    const definedRange = this.range();
    return (
      isSameDay(range.startDate, definedRange.startDate) &&
      isSameDay(range.endDate, definedRange.endDate)
    );
  },
};

export function createStaticRanges(ranges) {
  return ranges.map(range => ({ ...staticRangeHandler, ...range }));
}

export const defaultStaticRanges = createStaticRanges([
  {
    label: "Aujourd'hui",
    range: () => ({
      startDate: defineds().startOfToday,
      endDate: defineds().endOfToday,
    }),
    id: 'today'
  },
  {
    label: 'Hier',
    range: () => ({
      startDate: defineds().startOfYesterday,
      endDate: defineds().endOfYesterday,
    }),
    id: 'yesterday'
  },
  {
    label: 'les 7 derniers jours',
    range: () => ({
      startDate: defineds().lastSevenDays,
      endDate: defineds().endOfToday,
    }),
    id: 'last_7_days'
  },
  {
    label: 'les 30 derniers jours',
    range: () => ({
      startDate: defineds().lastThirtyDays,
      endDate: defineds().endOfToday,
    }),
    id: 'last_30_days'
  },
  {
    label: 'Cette semaine',
    range: () => ({
      startDate: defineds().startOfWeek,
      endDate: defineds().endOfWeek,
    }),
    id: 'current_week'
  },
  {
    label: 'La semaine dernière',
    range: () => ({
      startDate: defineds().startOfLastWeek,
      endDate: defineds().endOfLastWeek,
    }),
    id: 'last_week'
  },
  {
    label: 'Ce mois-ci',
    range: () => ({
      startDate: defineds().startOfMonth,
      endDate: defineds().endOfMonth,
    }),
    id: 'current_month'
  },
  {
    label: 'Le mois dernier',
    range: () => ({
      startDate: defineds().startOfLastMonth,
      endDate: defineds().endOfLastMonth,
    }),
    id: 'last_month'
  },
]);

export const defaultInputRanges = [];
