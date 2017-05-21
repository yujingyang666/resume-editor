<template>
  <div id="editor">
    <nav>
      <ol>
        <li v-for="(item,index) in resume.visibleItems" v-bind:class="{active: item.field === selected}" @click="selected = item.field">
          <svg class="icon">
            <use :xlink:href='`#icon-${item.icon}`'></use>
          </svg>
        </li>
      </ol>
    </nav>
    <ol class="panels">
      <li v-for="(item,index) in resume.visibleItems" v-show="item.field === selected">
        <div v-if="resume[item.field] instanceof Array">
          <h2>{{item.field}}</h2>
          <!--<div v-if="item.type === 'array'">-->
          <div class="subitem" v-for="(subitem,index) in resume[item.field]">
            <div class='resumeField' v-for="(value,key) in subitem">
              <label>{{key}}</label>
              <input type="text" v-bind:value="value" @input="changeResumeField2(item.field,index,key, $event.target.value)">
            </div>
            <button class="button remove" @click="removeResumeSubfield(item.field, index)">删除</button>
            <hr>
          </div>
          <div class="add">
            <button @click="addResumeSubfield(item.field)">+</button>
          </div>
        </div>
        <div v-else class='resumeField' v-for="(value,key) in resume[item.field]">
          <label>{{key}}</label>
          <input type="text" v-bind:value="value" @input="changeResumeField(item.field,key, $event.target.value)">
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
  export default {
    name: 'Editor',
    computed: {
      selected: {
        get() {
          return this.$store.state.selected
        },
        set(value) {
          return this.$store.commit('switchTab', value)
        }
      },
      resume() {
        return this.$store.state.resume
      },
    },
    methods: {
      changeResumeField(field, subfield, value) {
        this.$store.commit('updateResume', {
          field,
          subfield,
          value
        })
      },
      changeResumeField2(item, index, subfield, value) {
        this.$store.commit('updateResume2', {
          item,
          index,
          subfield,
          value
        })
      },
      addResumeSubfield(field) {
        this.$store.commit('addResumeSubfield', field)
      },
      removeResumeSubfield(field, index) {
        this.$store.commit('removeResumeSubfield', {
          field,
          index
        })
      }
    }
  }

</script>

<style lang="scss" scoped>
  #editor {
    min-width: 35%;
    background: #FFF;
    color: #000;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.25);
    display: flex;
    align-items:stretch;
    overflow: auto;
    >nav {
      width: 80px;
      background: black;
      color: white;
      >ol {
        >li {
          height: 48px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 16px;
          cursor: pointer;
          &.active {
            background: white;
            color: black;
          }
        }
      }
    }
    >.panels {
      flex-grow: 1;
      h2 {
        margin-bottom: 24px;
      }

      >li {
        padding: 24px;
        position: relative;
        .subitem {
          position: relative;
          .remove {
            position: absolute;
            bottom: 10px;
            right: 0px;
            color: lightcoral;
            font-size: 10px;
            background-color: #FFF;
            border: 1px solid lightcoral;
            width: 50px;
            height: 22px;
            outline: none;
          }
        }
        .add {
          width: 100%;
          text-align: center;
          button {
            color: lightseagreen;
            font-size: 20px;
            background-color: #FFF;
            border: 1px solid lightseagreen;
            border-radius: 5px;
            width: 150px;
            height: 35px;
            outline: none;
          }
        }
      }
    }
    svg.icon {
      width: 24px;
      height: 24px;
    }
  }

  ol {
    list-style: none;
  }

  .resumeField {
    >label {
      display: block;
    }
    input[type=text] {
      margin: 16px 0;
      border: 1px solid #ddd;
      box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.25);
      width: 100%;
      height: 40px;
      padding: 0 8px;
    }
  }

  hr {
    border: none;
    border-top: 1px solid #ddd;
    margin: 24px 0;
  }

</style>
