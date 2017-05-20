import Vue from 'vue'
import Router from 'vue-router'
import Resume from '@/components/Resume'
import previewWeb from '@/components/previewWeb'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Resume',
      component: Resume
    },
    {
      path: '/previewWeb',
      name: 'previewWeb',
      component: previewWeb
    }
  ]
})
