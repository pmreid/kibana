import _ from 'lodash';
import VislibComponentsLabelsDataArrayProvider from 'ui/vislib/components/labels/data_array';
import VislibComponentsLabelsUniqLabelsProvider from 'ui/vislib/components/labels/uniq_labels';
import VislibComponentsLabelsPiePieLabelsProvider from 'ui/vislib/components/labels/pie/pie_labels';
export default function LabelUtilService(Private) {

  var createArr = Private(VislibComponentsLabelsDataArrayProvider);
  var getArrOfUniqLabels = Private(VislibComponentsLabelsUniqLabelsProvider);
  var getPieLabels = Private(VislibComponentsLabelsPiePieLabelsProvider);

  /*
   * Accepts a Kibana data object and returns an array of unique labels (strings).
   * Extracts the field formatter from the raw object and passes it to the
   * getArrOfUniqLabels function.
   *
   * Currently, this service is only used for vertical bar charts and line charts.
   */
  return function (obj, chartType) {
    if (!_.isObject(obj)) { throw new TypeError('LabelUtil expects an object'); }
    if (chartType === 'pie') { return getPieLabels(obj); }
    return getArrOfUniqLabels(createArr(obj));
  };
};
