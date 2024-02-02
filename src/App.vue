<template>
  
  <h1>
    Toplam Görev /{{ data.length }} <br>
    Tamlamlanan Görev/{{ getComplated }} <br>
    Tamamlanmamış Görev/ {{ getRemaind }}
  </h1>
  <div>
    <input placeholder="Bir görev gir" @keydown="onKeyDown" v-model="model" class="todo-input">
  </div>

  <div
  @click="switchStatus(item)"
  :class="{animation:animationActive && item.complate===false,strike:item.complate}"
   v-for="item in data" :key="item" class="todo-item">{{item.text}}</div>
</template>

<script>


export default {
  name: 'App',
  computed:{
    getComplated(){
      return this.data.filter((item)=>item.complate).length
    },
    getRemaind(){
      return this.data.filter((item)=>!item.complate).length
    }
  },

  methods:{
    switchStatus(item){
      const idx=this.data.findIndex((x)=>x.id===item.id)
      this.data[idx].complate=!item.complate
    },
    onKeyDown(e){
      if(e.which===13){
        clearTimeout(this.intervalid)
        this.animationActive=true
        this.data.push({
          id:Date.now(),
          text:this.model,
          complate:false
        })
        this.model="";
        this.intervalid=setTimeout(()=>{
          this.animationActive=false
        },2000)
      }
    }
  },
  data(){
    return{
      animationActive:false,
      model:'',
      data:[],
      intervalid:0
    }
  },
  components: {
    
  }
}
</script>

<style>
*{
  box-sizing: border-box;
}
.animation{
  animation: rotation 2s infinite linear;
}
@keyframes rotation{
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(359deg);
  }
}

.strike{
  text-decoration: line-through;
  animation: strike 2s linear;
  color:#B6BBC4;
  transition: all 2s;
  transform: scale(1.2);
}
@keyframes strike{
  from{
    text-decoration-color: transparent;
  }
  to{
    text-decoration-color: auto;
  }
}
.todo-item{
  text-transform: uppercase;
  margin-bottom: 20px;
  cursor: pointer;
}
.todo-input{

  padding: 8px 16px;
  width: 50%;
  border:none;
  outline: none;
  box-sizing: border-box;
  height: 40px;
  border-radius: 8px;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 40px;
}
body{
  text-align: center;
  color:#F0ECE5;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  margin: 0;
  background-color: #161A30;
  box-sizing: border-box;
}
</style>
