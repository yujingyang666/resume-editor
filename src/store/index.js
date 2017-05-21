// ========vuex.js

import 'babel-polyfill'  //为vuex兼容IE，引入polyfill
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        selected: "profile",
        saveVisable:false,
        user:{
          id:'',
          username:''
        },
        resume: {
          visibleItems: [{
              field: 'profile',
              icon: 'id'
            },
            {
              field: 'workHistory',
              icon: 'work'
            },
            {
              field: 'education',
              icon: 'book'
            },
            {
              field: 'projects',
              icon: 'heart'
            },
            {
              field: 'awards',
              icon: 'cup'
            },
            {
              field: 'contacts',
              icon: 'phone'
            }
          ],
          profile: {
            name: '小牛哥',
            city: '广东省 东莞市',
            title: '霸道总裁',
            birthday:'1970-1-1'
          },
          workHistory: [{
              company: 'xxx匹凸匹金融公司',
              content: `P2P霸道总裁，泡妞跑路两不误
              主要工作如下：
              1、xxxxxxxxxxxx
              2、oooooooooooooo`
            },
            {
              company: '社会混日子',
              content: '社会我牛哥，人狠话不多'
            }
          ],
          education: [{
              school: '社会高中',
              content: '遛遛狗，撸撸串，又一天'
            },
            {
              school: '清华大学',
              content: '发愤图强考上清华，结果败给了房价'
            },
          ],
          projects: [{
              name: '第十八届亚太合作组织领导人会晤',
              content: '跟长者谈笑风生，一起吃华莱士炸鸡。确立三个老表重要思想。'
            },
            {
              name: '基于 HTML 5 + Vue.js 的在线简历编辑器开发',
              content: `工具依赖：vue-cli、SASS、vuex、leanCloud
              功能：可编辑、保存、登录&注册`
            },
          ],
          awards: [{
              name: '康师傅「再来一瓶」',
              content: '在校期间多次获得康师傅「再来一瓶」奖励'
            },
            {
              name: '三好学生',
              content: '小学时期多次获得"三好学生"称号'
            },
          ],
          contacts: [{
              contact: 'phone',
              content: '13812345678'
            },
            {
              contact: 'qq',
              content: '12345678'
            },
          ],
          id:'',
          
        },
        initdata:{
          visibleItems: [{
              field: 'profile',
              icon: 'id'
            },
            {
              field: 'workHistory',
              icon: 'work'
            },
            {
              field: 'education',
              icon: 'book'
            },
            {
              field: 'projects',
              icon: 'heart'
            },
            {
              field: 'awards',
              icon: 'cup'
            },
            {
              field: 'contacts',
              icon: 'phone'
            }
          ],
          profile: {
            name: '小牛哥',
            city: '广东省 东莞市',
            title: '霸道总裁',
            birthday:'1970-1-1'
          },
          workHistory: [{
              company: 'xxx匹凸匹金融公司',
              content: `P2P霸道总裁，泡妞跑路两不误
              主要工作如下：
              1、xxxxxxxxxxxx
              2、oooooooooooooo`
            },
            {
              company: '社会混日子',
              content: '社会我牛哥，人狠话不多'
            }
          ],
          education: [{
              school: '社会高中',
              content: '遛遛狗，撸撸串，又一天'
            },
            {
              school: '清华大学',
              content: '发愤图强考上清华，结果败给了房价'
            },
          ],
          projects: [{
              name: '第十八届亚太合作组织领导人会晤',
              content: '跟长者谈笑风生，一起吃华莱士炸鸡。确立三个老表重要思想。'
            },
            {
              name: '基于 HTML 5 + Vue.js 的在线简历编辑器开发',
              content: `工具依赖：vue-cli、SASS、vuex、leanCloud
              功能：可编辑、保存、登录&注册`
            },
          ],
          awards: [{
              name: '康师傅「再来一瓶」',
              content: '在校期间多次获得康师傅「再来一瓶」奖励'
            },
            {
              name: '三好学生',
              content: '小学时期多次获得"三好学生"称号'
            },
          ],
          contacts: [{
              contact: 'phone',
              content: '13812345678'
            },
            {
              contact: 'qq',
              content: '12345678'
            },
          ],
          id:'',
          
        }
        // resume:{
        //   visibleItems: [
        //     {field:'profile',icon:'id',keys:['name','city','title','birthday']},
        //     { field: 'workHistory', icon: 'work', type: 'array', keys: ['company', 'details'] },
        //     { field: 'education', icon: 'book',type: 'array',  keys: ['school', 'details'] },
        //     { field: 'projects', icon: 'heart',type: 'array',  keys: ['name', 'details']  },
        //     { field: 'awards', icon: 'cup' ,type: 'array',  keys: ['name', 'details'] },
        //     { field: 'contacts', icon: 'phone' ,type: 'array',  keys: ['contact', 'content'] },
        //   ],
        //   profile: { },
        //   workHistory: [ ],
        //   education: [ ],
        //   projects: [ ],
        //   awards: [ ],
        //   contacts: [ ],
        //   id:''
        // },
        // initdata:{
        //   visibleItems: [
        //     {field:'profile',icon:'id',keys:['name','city','title','birthday']},
        //     { field: 'workHistory', icon: 'work', type: 'array', keys: ['company', 'details'] },
        //     { field: 'education', icon: 'book',type: 'array',  keys: ['school', 'details'] },
        //     { field: 'projects', icon: 'heart',type: 'array',  keys: ['name', 'details']  },
        //     { field: 'awards', icon: 'cup' ,type: 'array',  keys: ['name', 'details'] },
        //     { field: 'contacts', icon: 'phone' ,type: 'array',  keys: ['contact', 'content'] },
        //   ],
        //   profile: { },
        //   workHistory: [ ],
        //   education: [ ],
        //   projects: [ ],
        //   awards: [ ],
        //   contacts: [ ],
        //   id:''
        // },
      },
    mutations:{
        switchTab(state,payload){
            state.selected=payload;
            // localStorage.setItem('state',JSON.stringify(state)) //把state值保存到localStorage
        },
        updateResume(state,{field,subfield,value}){
          state.resume[field][subfield]=value
          // localStorage.setItem('state',JSON.stringify(state))
        },
        updateResume2(state,{item,index,subfield,value}){
          state.resume[item][index][subfield]=value
          // localStorage.setItem('state',JSON.stringify(state))
        },
        setUser(state,payload){
          Object.assign(state.user, payload)
          console.log('state.user.username:'+state.user.username)
        },
        removedate(state){
          state.user.id=''
          state.resume=JSON.parse(JSON.stringify(state.initdata))
        },
        initState(state,payload){
          Object.assign(state.resume,payload) //初始化state的值
        },
        updateResumeid(state,payload){
          state.resume.id=payload
        },
        initState_net(state,payload){
          state.resume=JSON.parse(payload)
        },
        setSaveVisable(state,payload){
          state.saveVisable=payload
        },
        addResumeSubfield(state,payload){
          let empty=JSON.parse(JSON.stringify(state.initdata[payload][0]))
          for (let key in empty){
            empty[key]=''
          }
          state.resume[payload].push(empty)
        },
        removeResumeSubfield(state,{field,index}){
            state.resume[field].splice(index,1)
        }


    }
})