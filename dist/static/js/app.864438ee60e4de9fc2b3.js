webpackJsonp([1],{129:function(e,t,s){"use strict";var n=s(62),a=s(383),i=s(369),o=s.n(i);n.a.use(a.a),t.a=new a.a({routes:[{path:"/",name:"Hello",component:o.a}]})},130:function(e,t,s){s(361);var n=s(31)(s(131),s(381),null,null);e.exports=n.exports},131:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(355),a=(s.n(n),s(356)),i=(s.n(a),s(374)),o=s.n(i),r=s(368),c=s.n(r),u=s(371),l=s.n(u),v=s(139),m=s(141),d=s(46),p=s(63);t.default={name:"app",store:m.a,components:{Topbar:o.a,Editor:c.a,Preview:l.a},created:function(){document.body.insertAdjacentHTML("afterbegin",v.a),this.$store.commit("setUser",s.i(p.a)()),this.fetch(),this.$store.commit("setSaveVisable",!0)},methods:{fetch:function(){var e=this;if(this.$store.state.user){new d.a.Query("resume").find().then(function(t){var s=t[0],n=s.attributes.content;e.$store.commit("initState_net",n),e.$store.commit("updateResumeid",s.id),console.log("更新成功")},function(e){console.error(e)})}}}}},132:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"Editor",computed:{selected:{get:function(){return this.$store.state.selected},set:function(e){return this.$store.commit("switchTab",e)}},resume:function(){return this.$store.state.resume}},methods:{changeResumeField:function(e,t,s){this.$store.commit("updateResume",{field:e,subfield:t,value:s})},changeResumeField2:function(e,t,s,n){this.$store.commit("updateResume2",{item:e,index:t,subfield:s,value:n})}}}},133:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},134:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"Dialog",props:["title","visible"],methods:{close:function(){this.$emit("close")}}}},135:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"Preview",computed:{resume:function(){return this.$store.state.resume}},created:function(){console.log(this.$store.state.resume===this.resume)}}},136:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(46),a=s(95);s(63);t.default={name:"SignInForm",data:function(){return{formData:{username:"",password:""},errorMessage:""}},methods:{signIn:function(){var e=this,t=this.formData,i=t.username,o=t.password;n.a.User.logIn(i,o).then(function(t){e.$emit("success",{username:t.attributes.username,id:t.id}),e.fetch()},function(t){e.errorMessage=s.i(a.a)(t)})},fetch:function(){var e=this;if(this.$store.state.user){new n.a.Query("resume").find().then(function(t){var s=t[0],n=s.attributes.content;e.$store.commit("initState_net",n),e.$store.commit("updateResumeid",s.id),console.log("更新成功")},function(e){console.error(e)})}}}}},137:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(46),a=s(95);s(63);t.default={name:"SignUpForm",data:function(){return{formData:{username:"",password:""},errorMessage:""}},created:function(){},methods:{signUp:function(){var e=this,t=this.formData,i=t.username,o=t.password,r=new n.a.User;r.setUsername(i),r.setPassword(o),r.signUp().then(function(t){e.$emit("success",{username:t.attributes.username,id:t.id})},function(t){e.errorMessage=s.i(a.a)(t)})}}}},138:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(96),a=s.n(n),i=s(370),o=s.n(i),r=s(373),c=s.n(r),u=s(372),l=s.n(u),v=s(46);t.default={name:"Topbar",data:function(){return{signUpDialogVisible:!1,signInDialogVisible:!1}},computed:{user:function(){return this.$store.state.user},logined:function(){return this.user.id},saveVisable:function(){return this.$store.state.saveVisable}},components:{MyDialog:o.a,SignUpForm:c.a,SignInForm:l.a},methods:{login:function(e){this.signUpDialogVisible=!1,this.signInDialogVisible=!1,this.$store.commit("setUser",e),this.$store.commit("setSaveVisable",!0)},signOut:function(){v.a.User.logOut(),this.$store.commit("removedate"),this.$store.commit("setSaveVisable",!1)},save:function(){var e=this;console.log("执行save");var t=a()(this.$store.state.resume),s=v.a.Object.extend("resume"),n=new s,i=new v.a.ACL;i.setReadAccess(v.a.User.current(),!0),i.setWriteAccess(v.a.User.current(),!0),n.set("content",t),n.setACL(i),n.save().then(function(t){e.$store.commit("updateResumeid",t.id)},function(e){console.error("保存失败")})},update:function(){var e=a()(this.$store.state.resume),t=v.a.Object.createWithoutData("resume",this.$store.state.resume.id);t.set("content",e),t.save().then(function(){console.log("更新成功")})},saveOrUpdate:function(){this.$store.state.resume.id?this.update():this.save()}}}},139:function(e,t,s){"use strict";t.a='<svg style="display:none">\n<symbol id="icon-add" width="200px" height="200.00px" viewBox="0 0 1024 1024" ><path d="M1000.704728 1023.968001h-139.643636a23.295272 23.295272 0 0 1 0-46.558545h116.348364V861.093091a23.295272 23.295272 0 0 1 46.558545 0v139.643636a23.295272 23.295272 0 0 1-23.263273 23.263273z m0-279.255273a23.295272 23.295272 0 0 1-23.295272-23.295272v-139.611637a23.295272 23.295272 0 0 1 46.558545 0v139.611637a23.295272 23.295272 0 0 1-23.263273 23.295272z m0-279.287273a23.295272 23.295272 0 0 1-23.295272-23.263273V302.550545a23.295272 23.295272 0 0 1 46.558545 0v139.611637a23.295272 23.295272 0 0 1-23.263273 23.263273z m0-279.255273a23.295272 23.295272 0 0 1-23.295272-23.263273V46.558545H861.093091a23.295272 23.295272 0 0 1 0-46.558545h139.643636c12.7996 0 23.263273 10.431674 23.263273 23.263273v139.643636a23.295272 23.295272 0 0 1-23.263273 23.263273zM721.417456 1023.968001h-139.611637a23.295272 23.295272 0 0 1 0-46.558545h139.611637a23.295272 23.295272 0 0 1 0 46.558545z m0-977.409456h-139.611637a23.295272 23.295272 0 0 1 0-46.558545h139.611637a23.295272 23.295272 0 0 1 0 46.558545z m-26.143183 418.86691a46.526546 46.526546 0 1 1 0 93.117091h-139.643636v139.611637a46.558545 46.558545 0 0 1-93.085092 0v-139.611637h-139.611637a46.558545 46.558545 0 0 1 0-93.117091h139.611637v-139.611637a46.526546 46.526546 0 1 1 93.117091 0v139.611637h139.611637z m-253.112091-418.86691H302.550545a23.295272 23.295272 0 0 1 0-46.558545h139.611637a23.295272 23.295272 0 0 1 0 46.558545zM162.906909 1023.968001H23.263273A23.295272 23.295272 0 0 1 0 1000.704728v-139.643636a23.295272 23.295272 0 0 1 46.558545 0v116.348364H162.87491a23.295272 23.295272 0 0 1 0 46.558545z m0-977.409456H46.558545V162.87491A23.295272 23.295272 0 0 1 0 162.87491V23.263273C0 10.431674 10.431674 0 23.263273 0h139.643636a23.295272 23.295272 0 0 1 0 46.558545zM23.263273 279.255273c12.863598 0 23.295272 10.431674 23.295272 23.295272v139.611637a23.295272 23.295272 0 0 1-46.558545 0V302.550545c0-12.863598 10.431674-23.295272 23.263273-23.295272z m0 279.287273c12.863598 0 23.295272 10.399675 23.295272 23.263273v139.611637a23.295272 23.295272 0 0 1-46.558545 0v-139.611637c0-12.863598 10.431674-23.263273 23.263273-23.263273z m279.287272 418.86691h139.611637a23.295272 23.295272 0 0 1 0 46.558545H302.550545a23.295272 23.295272 0 0 1 0-46.558545z" /></symbol>\n<symbol id="icon-book" width="200px" height="168.84px" viewBox="0 0 1213 1024" ><path d="M1211.58163 124.09363s-68.645926-57.685333-138.808889-88.064c-76.382815-37.05363-184.32-35.346963-184.32-35.346963s-76.003556-5.688889-153.941334 31.478518a658.773333 658.773333 0 0 0-135.471407 87.684741S519.585185 58.405926 449.308444 26.244741C379.031704-5.95437 277.617778 0.682667 277.617778 0.682667S181.172148 5.688889 119.125333 33.867852C57.002667 62.084741 0 129.21363 0 129.21363V994.797037s87.722667-76.724148 140.060444-98.304 134.181926-20.859259 134.181926-20.859259 98.076444 11.908741 156.520297 35.764148c58.405926 23.893333 168.239407 112.336593 168.239407 112.336593s70.011259-75.472593 126.217482-103.80326c95.269926-49.796741 189.743407-42.590815 189.743407-42.590815s58.026667 2.578963 138.808889 33.223112c73.424593 27.83763 159.250963 85.940148 159.250963 85.940148l-1.517037-872.410074zM569.192296 928.426667s-150.262519-120.187259-294.912-117.456593c-136.305778 2.541037-188.453926 37.432889-223.762963 73.197037 1.251556-42.097778-0.644741-723.512889-0.64474-723.512889s52.337778-95.269926 229.072592-102.930963c150.186667-12.781037 279.74163 94.435556 287.706074 114.915556 3.792593 26.775704 2.541037 755.787852 2.541037 755.787852z m586.827852-28.065186c-35.309037-35.764148-129.972148-89.391407-266.277926-91.932444-144.649481-2.730667-258.503111 121.287111-258.503111 121.287111s-1.289481-729.012148 2.503111-755.825778c12.629333-20.404148 111.085037-122.538667 287.744-114.915555 153.144889 6.750815 236.506074 100.617481 236.506074 100.617481s-1.820444 698.974815-1.972148 740.73126z" /></symbol>\n<symbol id="icon-cup" width="200px" height="200.00px" viewBox="0 0 1024 1024" ><path d="M257.613576 557.676606a17.811394 17.811394 0 0 1-5.306182-0.806788l-29.416727-8.998788a18.059636 18.059636 0 0 1-4.468364-2.016969C78.072242 456.921212 10.053818 372.70497 16.259879 295.501576 23.024485 210.944 115.246545 170.790788 119.156364 169.115152a18.214788 18.214788 0 0 1 7.136969-1.458425h17.873455c9.867636 0 17.997576 7.881697 18.369939 17.842425 5.740606 141.28097 110.312727 342.884848 111.336728 344.901818a18.742303 18.742303 0 0 1-2.048 20.48 18.307879 18.307879 0 0 1-14.211879 6.826666zM127.069091 206.506667c-18.307879 9.557333-70.128485 40.92897-74.162424 92.16-4.499394 58.212848 52.844606 128.341333 166.198303 203.465697-30.471758-65.784242-82.354424-190.526061-92.035879-295.625697z m652.443151 344.622545a18.307879 18.307879 0 0 1-13.498181-5.957818 18.742303 18.742303 0 0 1-3.227152-20.355879c0.930909-2.07903 93.835636-209.423515 91.477333-350.797576a18.525091 18.525091 0 0 1 17.34594-18.897454l17.811394-1.024a18.959515 18.959515 0 0 1 7.23006 1.024c4.002909 1.458424 98.33503 36.150303 109.909334 120.180363 10.581333 76.737939-52.503273 164.770909-187.547152 261.709576a18.618182 18.618182 0 0 1-4.313212 2.296243l-28.858182 10.705454a17.935515 17.935515 0 0 1-6.330182 1.117091zM890.88 192.915394c-3.692606 105.472-48.345212 233.006545-75.031273 300.466424 108.885333-81.578667 162.133333-154.903273 154.282667-212.774788-6.888727-50.889697-60.38497-79.189333-79.251394-87.691636z" /><path d="M511.100121 737.900606c-221.059879 0-400.911515-300.807758-400.911515-670.533818 0-13.312 0.279273-26.499879 0.713697-39.594667a27.741091 27.741091 0 0 1 27.61697-26.934303h745.161697c14.894545 0 27.089455 11.915636 27.585939 26.934303 0.434424 13.094788 0.744727 26.282667 0.744727 39.594667 0 369.726061-179.851636 670.533818-400.911515 670.533818zM165.453576 56.630303l-0.062061 10.736485c0 338.97503 155.089455 614.710303 345.708606 614.710303s345.708606-275.735273 345.708606-614.710303c0-3.599515 0-7.13697-0.06206-10.736485H165.453576z" /><path d="M579.025455 602.049939a18.649212 18.649212 0 0 1-7.230061-35.684848c122.352485-53.030788 156.082424-206.041212 156.392727-207.561697a18.46303 18.46303 0 0 1 21.845334-14.30497 18.618182 18.618182 0 0 1 14.180848 22.031515c-1.458424 7.043879-37.794909 173.304242-177.958788 233.999516a17.935515 17.935515 0 0 1-7.23006 1.520484z m-67.925334 272.32194c-15.235879 0-27.61697-10.550303-27.616969-23.583031v-145.097696c0-13.032727 12.381091-23.58303 27.616969-23.583031s27.61697 10.550303 27.61697 23.583031v145.097696c0 13.032727-12.381091 23.58303-27.61697 23.583031z" /><path d="M747.675152 1023.875879H287.961212a27.772121 27.772121 0 0 1-27.61697-27.927273c0-92.966788 113.105455-165.825939 257.458425-165.825939 144.384 0 257.458424 72.859152 257.458424 165.856969a27.772121 27.772121 0 0 1-27.61697 27.896243zM322.466909 968.083394h390.733576c-23.365818-46.669576-103.39297-82.168242-195.366788-82.168242-91.973818 0-172.00097 35.498667-195.366788 82.168242z" /></symbol>\n<symbol id="icon-heart" width="200px" height="187.55px" viewBox="0 0 1092 1024" ><path d="M1090.321067 305.732267c-15.906133-176.64-140.0832-304.810667-295.5264-304.810667-103.5264 0-198.382933 56.081067-251.733334 145.988267C490.1888 55.876267 399.291733 0.9216 297.3696 0.9216 141.9264 0.9216 17.749333 129.092267 1.8432 305.664c-1.262933 7.850667-6.485333 48.878933 9.284267 115.848533 22.596267 96.597333 74.922667 184.388267 151.210666 253.952l380.450134 347.477334 387.037866-347.477334c76.288-69.563733 128.580267-157.354667 151.210667-253.952 15.7696-66.9696 10.581333-108.032 9.284267-115.780266z m-50.176 106.052266c-20.650667 88.2688-68.608 168.618667-138.4448 232.2432L543.061333 966.109867 190.5664 644.096c-69.973333-63.7952-117.896533-144.110933-138.581333-232.3456-14.848-63.351467-8.704-99.157333-8.704-99.328l0.3072-2.1504c13.653333-154.794667 120.354133-267.093333 253.781333-267.093333 98.440533 0 185.105067 60.893867 226.269867 158.856533l19.319466 46.216533 19.319467-46.216533c40.482133-96.4608 131.754667-158.8224 232.516267-158.8224 133.393067 0 240.128 112.298667 254.0544 269.038933 0.068267 0.341333 6.212267 36.181333-8.704 99.498667z" /><path d="M336.0768 129.467733c-115.848533 0-210.056533 94.8224-210.056533 211.387734 0 11.6736 9.4208 21.162667 21.026133 21.162666 11.605333 0 20.992-9.489067 20.992-21.162666 0-93.2864 75.3664-169.130667 168.0384-169.130667 11.605333 0 20.992-9.454933 20.992-21.128533a21.060267 21.060267 0 0 0-20.992-21.162667z" /></symbol>\n<symbol id="icon-id" width="200px" height="156.34px" viewBox="0 0 1310 1024" ><path d="M370.4832 464.52736c-82.82112 0-150.15936-66.68288-150.15936-148.6848 0-81.92 67.33824-148.60288 150.15936-148.60288 82.78016 0 150.15936 66.68288 150.15936 148.64384 0 81.92-67.3792 148.64384-150.15936 148.64384z m0-245.67808c-54.0672 0-98.01728 43.54048-98.01728 97.03424 0 53.49376 43.95008 97.03424 98.01728 97.03424 54.02624 0 97.97632-43.54048 97.97632-97.0752 0-53.4528-43.95008-96.99328-97.97632-96.99328z m218.27584 410.29632H536.576c0-90.68544-74.5472-164.4544-166.13376-164.4544-91.62752 0-166.13376 73.728-166.13376 164.4544H152.20736c0-119.1936 97.8944-216.10496 218.27584-216.10496 120.34048 0 218.27584 96.95232 218.27584 216.10496z m637.7472 394.15808H84.1728c-45.6704 0-82.86208-36.864-82.86208-82.08384V82.86208C1.31072 37.60128 38.5024 0.77824 84.1728 0.77824h1142.3744c45.6704 0 82.86208 36.864 82.86208 82.08384v858.35776a82.61632 82.61632 0 0 1-82.90304 82.08384zM84.1728 52.4288a30.59712 30.59712 0 0 0-30.72 30.43328v858.35776c0 16.7936 13.80352 30.43328 30.72 30.43328h1142.3744c16.91648 0 30.72-13.68064 30.72-30.43328V82.86208a30.63808 30.63808 0 0 0-30.72-30.43328H84.13184z m643.60448 206.97088h410.29632v51.6096H727.77728v-51.6096z m0 247.07072h410.29632v51.6096H727.77728v-51.6096zM151.01952 742.89152h987.05408v51.6096H151.01952v-51.6096z" /></symbol>\n<symbol id="icon-phone" width="200px" height="200.00px" viewBox="0 0 1024 1024" ><path d="M197.632381 41.178403c37.763833 0 140.877405 98.769335 172.435185 165.174103 7.136961 14.956588 9.464231 27.772088 5.740599 31.123356L330.84531 278.342722c-32.116325 29.23051-49.182971 59.981503-50.765514 91.353101-1.644604 31.55778 12.319015 63.363802 41.363344 94.518189l242.532555 260.002594c30.44069 32.7059 61.657137 48.562365 95.356005 48.562365 31.216447 0 61.688168-13.901559 93.152857-42.573524l44.838734-40.835829c1.17915-1.086059 2.761694-1.489453 4.995872-1.644604 37.794863 0 128.930753 90.949708 155.399569 146.773155 7.447264 15.670284 9.464231 28.423723 5.213085 32.271476l-44.838733 40.773769c-44.869764 40.835829-95.200854 65.256648-149.379698 72.393609a253.548299 253.548299 0 0 1-33.543717 2.203149c-87.319167 0-175.786454-43.28722-249.110971-121.855852L161.358001 512.372984C26.376346 367.647826 21.597685 199.184515 149.101046 83.224413l44.931824-40.835829a5.461327 5.461327 0 0 1 3.009936-1.14812l0.589575-0.062061z m0-41.177162a47.476306 47.476306 0 0 0-32.054264 12.163864L120.801444 52.907844c-143.887341 130.823599-139.977527 326.655604 9.836594 487.299288l324.638637 348.097517c81.392386 87.288137 181.527053 135.198866 279.799903 135.198867 13.063742 0 26.127483-0.837817 39.098135-2.575512 62.929378-8.285081 120.862884-36.21232 172.217973-82.97493l44.838733-40.773769c13.498165-12.225925 25.227606-36.057168 4.344237-80.120145-28.299602-59.485019-128.992813-170.511308-193.163402-170.511309a48.438244 48.438244 0 0 0-33.202384 12.505197l-45.024915 40.990981c-23.055487 20.945429-44.187098 31.650871-64.853255 31.650871-21.535004 0-42.511464-11.605319-64.542952-35.343473l-242.625645-260.002593c-21.224702-22.776215-31.464689-44.46637-30.37863-64.511922 0.992968-20.386884 13.560226-41.580556 37.36044-63.270711l44.869763-40.742739c13.218893-12.008713 24.54494-35.436563 3.816723-78.972025C376.894224 123.687879 263.044181 0.001241 197.663411 0.001241z" /></symbol>\n<symbol id="icon-work" width="200px" height="181.40px" viewBox="0 0 1129 1024" ><path d="M971.74069 178.811586H790.951724v-66.736552c0-62.252138-49.716966-111.192276-112.993103-111.192275h-225.986207c-63.276138 0-112.993103 48.940138-112.993104 111.227586v66.701241H158.190345C70.055724 178.811586 0 247.737379 0 334.494897v533.715862c0 86.757517 70.055724 155.68331 158.190345 155.68331h813.550345c88.134621 0 158.190345-68.925793 158.190344-155.68331V334.494897c0-86.757517-72.315586-155.718621-158.190344-155.718621z m-587.564138-66.736552c0-37.782069 29.378207-66.701241 67.795862-66.701241h225.986207c38.417655 0 67.795862 28.919172 67.795862 66.736552v66.701241H384.176552v-66.736552z m-225.986207 111.227587h813.550345c63.276138 0 112.993103 48.904828 112.993103 111.192276v206.812689L564.965517 748.120276 45.197241 541.307586V334.494897c0-62.287448 49.716966-111.227586 112.993104-111.227587z m813.550345 756.100413H158.190345c-63.276138 0-112.993103-48.904828-112.993104-111.192275v-277.963035L564.965517 797.060414l519.768276-206.81269v277.963035c0 60.027586-51.976828 111.227586-112.993103 111.227586z" /></symbol>\n</svg>'},140:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(62),a=s(130),i=s.n(a),o=s(129);n.a.config.productionTip=!1,new n.a({el:"#app",router:o.a,template:"<App/>",components:{App:i.a}})},141:function(e,t,s){"use strict";var n=s(96),a=s.n(n),i=s(143),o=s.n(i),r=s(142),c=(s.n(r),s(385));s(62).a.use(c.a),t.a=new c.a.Store({state:{selected:"profile",saveVisable:!1,user:{id:"",username:""},resume:{visibleItems:[{field:"profile",icon:"id"},{field:"workHistory",icon:"work"},{field:"education",icon:"book"},{field:"projects",icon:"heart"},{field:"awards",icon:"cup"},{field:"contacts",icon:"phone"}],profile:{name:"小牛哥",city:"广东省 东莞市",title:"霸道总裁",birthday:"1970-1-1"},workHistory:[{company:"xxx匹凸匹金融公司",content:"P2P霸道总裁，泡妞跑路两不误\n              主要工作如下：\n              1、xxxxxxxxxxxx\n              2、oooooooooooooo"},{company:"社会混日子",content:"社会我牛哥，人狠话不多"}],education:[{school:"社会高中",content:"遛遛狗，撸撸串，又一天"},{school:"清华大学",content:"发愤图强考上清华，结果败给了房价"}],projects:[{name:"第十八届亚太合作组织领导人会晤",content:"跟长者谈笑风生，一起吃华莱士炸鸡。确立三个老表重要思想。"},{name:"基于 HTML 5 + Vue.js 的在线简历编辑器开发",content:"工具依赖：vue-cli、SASS、vuex、leanCloud\n              功能：可编辑、保存、登录&注册"}],awards:[{name:"康师傅「再来一瓶」",content:"在校期间多次获得康师傅「再来一瓶」奖励"},{name:"三好学生",content:'小学时期多次获得"三好学生"称号'}],contacts:[{contact:"phone",content:"13812345678"},{contact:"qq",content:"12345678"}],id:""},initdata:{visibleItems:[{field:"profile",icon:"id"},{field:"workHistory",icon:"work"},{field:"education",icon:"book"},{field:"projects",icon:"heart"},{field:"awards",icon:"cup"},{field:"contacts",icon:"phone"}],profile:{name:"小牛哥",city:"广东省 东莞市",title:"霸道总裁",birthday:"1970-1-1"},workHistory:[{company:"xxx匹凸匹金融公司",content:"P2P霸道总裁，泡妞跑路两不误\n              主要工作如下：\n              1、xxxxxxxxxxxx\n              2、oooooooooooooo"},{company:"社会混日子",content:"社会我牛哥，人狠话不多"}],education:[{school:"社会高中",content:"遛遛狗，撸撸串，又一天"},{school:"清华大学",content:"发愤图强考上清华，结果败给了房价"}],projects:[{name:"第十八届亚太合作组织领导人会晤",content:"跟长者谈笑风生，一起吃华莱士炸鸡。确立三个老表重要思想。"},{name:"基于 HTML 5 + Vue.js 的在线简历编辑器开发",content:"工具依赖：vue-cli、SASS、vuex、leanCloud\n              功能：可编辑、保存、登录&注册"}],awards:[{name:"康师傅「再来一瓶」",content:"在校期间多次获得康师傅「再来一瓶」奖励"},{name:"三好学生",content:'小学时期多次获得"三好学生"称号'}],contacts:[{contact:"phone",content:"13812345678"},{contact:"qq",content:"12345678"}],id:""}},mutations:{switchTab:function(e,t){e.selected=t},updateResume:function(e,t){var s=t.field,n=t.subfield,a=t.value;e.resume[s][n]=a},updateResume2:function(e,t){var s=t.item,n=t.index,a=t.subfield,i=t.value;e.resume[s][n][a]=i},setUser:function(e,t){o()(e.user,t),console.log("state.user.username:"+e.user.username)},removedate:function(e){e.user.id="",e.resume=JSON.parse(a()(e.initdata))},initState:function(e,t){o()(e.resume,t)},updateResumeid:function(e,t){e.resume.id=t},initState_net:function(e,t){e.resume=JSON.parse(t)},setSaveVisable:function(e,t){e.saveVisable=t}}})},355:function(e,t){},356:function(e,t){},357:function(e,t){},358:function(e,t){},359:function(e,t){},360:function(e,t){},361:function(e,t){},362:function(e,t){},368:function(e,t,s){s(360);var n=s(31)(s(132),s(379),"data-v-5bfd231b",null);e.exports=n.exports},369:function(e,t,s){s(359);var n=s(31)(s(133),s(378),"data-v-3cb53a14",null);e.exports=n.exports},370:function(e,t,s){s(362);var n=s(31)(s(134),s(382),"data-v-cb77627c",null);e.exports=n.exports},371:function(e,t,s){s(358);var n=s(31)(s(135),s(376),null,null);e.exports=n.exports},372:function(e,t,s){var n=s(31)(s(136),s(377),null,null);e.exports=n.exports},373:function(e,t,s){var n=s(31)(s(137),s(380),null,null);e.exports=n.exports},374:function(e,t,s){s(357);var n=s(31)(s(138),s(375),"data-v-124fbfcc",null);e.exports=n.exports},375:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"topbar"}},[s("div",{staticClass:"wrapper"},[s("span",{staticClass:"logo"},[e._v("在线简历编辑器")]),e._v(" "),s("div",{staticClass:"action"},[e.logined?s("div",{staticClass:"userActions"},[s("span",{staticClass:"welcome"},[e._v("你好，"+e._s(e.user.username))]),e._v(" "),s("a",{staticClass:"button",attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.signOut(t)}}},[e._v("登出")])]):s("div",{staticClass:"userActions"},[s("a",{staticClass:"button primary",attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.signUpDialogVisible=!0}}},[e._v("注册")]),e._v(" "),s("a",{staticClass:"button",attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.signInDialogVisible=!0}}},[e._v("登录")])]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.saveVisable,expression:"saveVisable"}],staticClass:"save"},[s("button",{staticClass:"button primary",on:{click:function(t){t.preventDefault(),e.saveOrUpdate(t)}}},[e._v("保存")]),e._v(" "),s("button",{staticClass:"button"},[e._v("预览")])]),e._v(" "),s("MyDialog",{attrs:{title:"注册",visible:e.signUpDialogVisible},on:{close:function(t){e.signUpDialogVisible=!1}}},[s("SignUpForm",{on:{success:function(t){e.login(t)}}})],1),e._v(" "),s("MyDialog",{attrs:{title:"登录",visible:e.signInDialogVisible},on:{close:function(t){e.signInDialogVisible=!1}}},[s("SignInForm",{on:{success:function(t){e.login(t)}}})],1)],1)])])},staticRenderFns:[]}},376:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"preview"}},[s("section",{directives:[{name:"show",rawName:"v-show",value:e.resume.profile,expression:"resume.profile"}],attrs:{"data-name":"profile"}},[s("h1",[e._v(e._s(e.resume.profile.name))]),e._v(" "),s("h2",[e._v(e._s(e.resume.profile.title))]),e._v(" "),s("p",[s("small",[e._v(e._s(e.resume.profile.city))]),e._v(" "),s("small",[e._v(e._s(e.resume.profile.birthday))])])]),e._v(" "),s("section",{directives:[{name:"show",rawName:"v-show",value:e.resume.workHistory.length>0,expression:"resume.workHistory.length > 0"}],attrs:{"data-name":"workHistory"}},[s("h2",[e._v("工作经历")]),e._v(" "),s("ol",e._l(e.resume.workHistory,function(t){return s("li",[s("h3",[e._v(e._s(t.company))]),e._v(" "),s("p",{directives:[{name:"show",rawName:"v-show",value:t.content,expression:"item.content"}]},[e._v(e._s(t.content))])])}))]),e._v(" "),s("section",{directives:[{name:"show",rawName:"v-show",value:e.resume.projects.length>0,expression:"resume.projects.length > 0"}],attrs:{"data-name":"projects"}},[s("h2",[e._v("项目经历")]),e._v(" "),s("ol",e._l(e.resume.projects,function(t){return s("li",[s("h3",[e._v(e._s(t.name))]),e._v(" "),s("p",{directives:[{name:"show",rawName:"v-show",value:t.content,expression:"item.content"}]},[e._v(e._s(t.content))])])}))]),e._v(" "),s("section",{directives:[{name:"show",rawName:"v-show",value:e.resume.awards.length>0,expression:"resume.awards.length > 0"}],attrs:{"data-name":"awards"}},[s("h2",[e._v("获奖情况")]),e._v(" "),s("ol",e._l(e.resume.awards,function(t){return s("li",[s("h3",[e._v(e._s(t.name))]),e._v(" "),s("p",{directives:[{name:"show",rawName:"v-show",value:t.content,expression:"item.content"}]},[e._v(e._s(t.content))])])}))]),e._v(" "),s("section",{directives:[{name:"show",rawName:"v-show",value:e.resume.education.length>0,expression:"resume.education.length > 0"}],attrs:{"data-name":"education"}},[s("h2",[e._v("毕业院校")]),e._v(" "),s("ol",e._l(e.resume.education,function(t){return s("li",[s("h3",[e._v(e._s(t.school)+"\n          "),s("span",{directives:[{name:"show",rawName:"v-show",value:t.content,expression:"item.content"}]},[e._v(e._s(t.content))])])])}))]),e._v(" "),s("section",{directives:[{name:"show",rawName:"v-show",value:e.resume.contacts.length>0,expression:"resume.contacts.length > 0"}],attrs:{"data-name":"contacts"}},[s("h2",[e._v("联系方式")]),e._v(" "),s("table",e._l(e.resume.contacts,function(t){return s("tr",[s("td",[e._v(e._s(t.contact))]),e._v(" "),s("td",{directives:[{name:"show",rawName:"v-show",value:t.content,expression:"item.content"}]},[e._v(" "+e._s(t.content)+" ")])])}))])])},staticRenderFns:[]}},377:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("form",{on:{submit:function(t){t.preventDefault(),e.signIn(t)}}},[s("div",{staticClass:"row"},[s("label",[e._v("用户名")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.username,expression:"formData.username"}],attrs:{type:"text",required:""},domProps:{value:e.formData.username},on:{input:function(t){t.target.composing||(e.formData.username=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"row"},[s("label",[e._v("密码")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.password,expression:"formData.password"}],attrs:{type:"password",required:""},domProps:{value:e.formData.password},on:{input:function(t){t.target.composing||(e.formData.password=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"actions"},[s("input",{attrs:{type:"submit",value:"提交"}}),e._v(" "),s("span",[e._v(e._s(e.errorMessage))])])])])},staticRenderFns:[]}},378:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"hello"},[s("h1",[e._v(e._s(e.msg))]),e._v(" "),s("h2",[e._v("Essential Links")]),e._v(" "),e._m(0),e._v(" "),s("h2",[e._v("Ecosystem")]),e._v(" "),e._m(1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[s("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[e._v("Core Docs")])]),e._v(" "),s("li",[s("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[e._v("Forum")])]),e._v(" "),s("li",[s("a",{attrs:{href:"https://gitter.im/vuejs/vue",target:"_blank"}},[e._v("Gitter Chat")])]),e._v(" "),s("li",[s("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[e._v("Twitter")])]),e._v(" "),s("br"),e._v(" "),s("li",[s("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[e._v("Docs for This Template")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[s("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[e._v("vue-router")])]),e._v(" "),s("li",[s("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[e._v("vuex")])]),e._v(" "),s("li",[s("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[e._v("vue-loader")])]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[e._v("awesome-vue")])])])}]}},379:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"editor"}},[s("nav",[s("ol",e._l(e.resume.visibleItems,function(t,n){return s("li",{class:{active:t.field===e.selected},on:{click:function(s){e.selected=t.field}}},[s("svg",{staticClass:"icon"},[s("use",{attrs:{"xlink:href":"#icon-"+t.icon}})])])}))]),e._v(" "),s("ol",{staticClass:"panels"},e._l(e.resume.visibleItems,function(t,n){return s("li",{directives:[{name:"show",rawName:"v-show",value:t.field===e.selected,expression:"item.field === selected"}]},[e.resume[t.field]instanceof Array?s("div",e._l(e.resume[t.field],function(n,a){return s("div",{staticClass:"subitem"},[e._l(n,function(n,i){return s("div",{staticClass:"resumeField"},[s("label",[e._v(e._s(i))]),e._v(" "),s("input",{attrs:{type:"text"},domProps:{value:n},on:{input:function(s){e.changeResumeField2(t.field,a,i,s.target.value)}}})])}),e._v(" "),s("hr")],2)})):e._l(e.resume[t.field],function(n,a){return s("div",{staticClass:"resumeField"},[s("label",[e._v(e._s(a))]),e._v(" "),s("input",{attrs:{type:"text"},domProps:{value:n},on:{input:function(s){e.changeResumeField(t.field,a,s.target.value)}}})])})],2)}))])},staticRenderFns:[]}},380:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("form",{on:{submit:function(t){t.preventDefault(),e.signUp(t)}}},[s("div",{staticClass:"row"},[s("label",[e._v("用户名")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.username,expression:"formData.username"}],attrs:{type:"text",required:""},domProps:{value:e.formData.username},on:{input:function(t){t.target.composing||(e.formData.username=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"row"},[s("label",[e._v("密码")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.password,expression:"formData.password"}],attrs:{type:"password",required:""},domProps:{value:e.formData.password},on:{input:function(t){t.target.composing||(e.formData.password=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"actions"},[s("input",{attrs:{type:"submit",value:"提交"}}),e._v(" "),s("span",{staticClass:"errorMessage"},[e._v(e._s(e.errorMessage))])])])])},staticRenderFns:[]}},381:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"page"},[s("header",[s("Topbar")],1),e._v(" "),s("main",[s("Editor"),e._v(" "),s("Preview")],1)])])},staticRenderFns:[]}},382:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"wrapper"},[s("div",{staticClass:"dialog"},[s("header",[e._v(e._s(e.title)+"\n      "),s("span",{staticClass:"close",on:{click:e.close}},[e._v("X")])]),e._v(" "),s("main",[e._t("default")],2)])])},staticRenderFns:[]}},46:function(e,t,s){"use strict";var n=s(365),a=s.n(n);a.a.init({appId:"e4bR8OpuSmEPvPdSNe6LR9Ur-gzGzoHsz",appKey:"mDm37dHvuITwPDTSvxpTiH7s"}),t.a=a.a},63:function(e,t,s){"use strict";var n=s(46);t.a=function(e){var t=e||n.a.User.current()||{attributes:{}},s=t.id,a=t.attributes.username;return{id:s||"",username:a||""}}},95:function(e,t,s){"use strict";var n={202:"用户名已被占用",217:"无效的用户名",210:"用户名和密码不匹配",211:"找不到该用户",unknown:"请求失败，请稍后再试"};t.a=function(e){var t=e.code;return n[t]||n.unknown}}},[140]);
//# sourceMappingURL=app.864438ee60e4de9fc2b3.js.map