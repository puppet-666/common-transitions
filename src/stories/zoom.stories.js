
import Example from '../components/Example.vue'

export default { 
  title: 'Zoom',
 };

export const ZoomCenter = () => ({
  components: { Example },
  template: '<Example name="zoom-center"></Example>',
  parameters: {
    notes: '中央变焦动效组件',
  },
});

export const ZoomUp = () => ({
    components: { Example },
    template: '<Example name="zoom-up"></Example>',
    parameters: {
      notes: '上方向变焦动效组件',
    },
});

export const ZoomX = () => ({
    components: { Example },
    template: '<Example name="zoom-x"></Example>',
    parameters: {
      notes: 'x轴折叠动效组件',
    },
});
export const ZoomY = () => ({
    components: { Example },
    template: '<Example name="zoom-y"></Example>',
    parameters: {
      notes: 'y轴折叠动效组件',
    },
});