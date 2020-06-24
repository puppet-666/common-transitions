
import Example from '../components/Example.vue'

export default { 
  title: 'Fade',
  parameters: {
    notes: '渐隐动效组件',
  },
 };

export const FadeCommon = () => ({
  components: { Example },
  template: '<Example name="fade"></Example>',

});