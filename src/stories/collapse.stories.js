
import Example from '../components/Example.vue'

export default { 
  title: 'Collapse',
  parameters: {
    notes: '折叠动效组件',
  },
 };

export const CollapseCommon = () => ({
  components: { Example },
  template: '<Example name="collapse" :delay="5000"></Example>',

});