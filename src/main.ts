// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import InputNumber from 'primevue/inputnumber'
import Textarea from 'primevue/textarea'
import Menu from 'primevue/menu'
import Sidebar from 'primevue/sidebar'
import Avatar from 'primevue/avatar'
import AvatarGroup from 'primevue/avatargroup'
import Divider from 'primevue/divider'
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import Rating from 'primevue/rating'
import Message from 'primevue/message'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
import Stepper from 'primevue/stepper'
import StepperPanel from 'primevue/stepperpanel'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import Password from 'primevue/password'
import ToggleButton from 'primevue/togglebutton'
import MultiSelect from 'primevue/multiselect'
import Calendar from 'primevue/calendar'
import RadioButton from 'primevue/radiobutton'

import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primevue/resources/themes/aura-light-amber/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import Ripple from 'primevue/ripple'
import StyleClass from 'primevue/styleclass'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, { ripple: true })
app.use(ToastService)

app.directive('ripple', Ripple)
app.directive('styleclass', StyleClass)
app.component('Button', Button)
app.component('InputText', InputText)
app.component('Menu', Menu)
app.component('Sidebar', Sidebar)
app.component('Avatar', Avatar)
app.component('AvatarGroup', AvatarGroup)
app.component('Divider', Divider)
app.component('Footer', Footer)
app.component('Header', Header)
app.component('Rating', Rating)
app.component('Message', Message)
app.component('Toast', Toast)
app.component('Textarea', Textarea)
app.component('Stepper', Stepper)
app.component('StepperPanel', StepperPanel)
app.component('IconField', IconField)
app.component('InputIcon', InputIcon)
app.component('Password', Password)
app.component('ToggleButton', ToggleButton)
app.component('InputNumber', InputNumber)
app.component('MultiSelect', MultiSelect)
app.component('Calendar', Calendar)
app.component('RadioButton', RadioButton)

app.mount('#app')
