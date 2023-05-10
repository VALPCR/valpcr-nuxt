import Vue from 'vue'
import {
  DatePicker,
  Switch,
  Select,
  Option,
  Checkbox,
  Input,
  Radio,
  RadioGroup,
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

// configure language
locale.use(lang)

// import components
Vue.component(DatePicker.name, DatePicker)
Vue.component(Switch.name, Switch)
Vue.component(Select.name, Select)
Vue.component(Option.name, Option)
Vue.component(Checkbox.name, Checkbox)
Vue.component(Input.name, Input)
Vue.component(Radio.name, Radio)
Vue.component(RadioGroup.name, RadioGroup)
