<template>
    <div class="table__content">
      <div
      class="flex"
      > 성적표</div>
			<tableRow
				state="first"
				:index="0"
				:inputData="{ data:rowTitle }">
			</tableRow>

      <div v-for="(inFo, index) in university" :key="index.id">
				<tableRow
					@removeline="removeline"
					:index="index+1"
					:inputData="{ data: inFo }">
          
          </tableRow>
			  </div>

      <tableRow
				@addline="addline"
				state="add"
				:index="university.length + 1"
				:inputData="{ data:null }">
				</tableRow>
<div id="app">
      <router-link  :to="{ path: '/Calendar' }">다알력</router-link>
     </div> 
      
    </div>
    
    
</template>
<script>
import TableRow from './component/tableRow';

	
export default {
    name: 'app',
		components: {
			'tableRow': TableRow,
      		
    },
      mounted(){
       router.push("./Calendar")
     },
    data: function () {
        
      return {
          selected: [],
				rowTitle: {
          course: "COURSE",
					score: "SCORE",
					grade: "GRADE",
					control:"CONTROL"
        },
          university: [
            {
            course: '국어',
                      score: '77',
                      grade: '3'
              
            },
            {
             course: '수학',
                      score: '92',
                      grade: '1'
            },
            {
             course: '영어',
                      score: '73',
                      grade: '3'
            }
          ]
        
      }
    },
     methods: {
      removeline: function(index) {
        this.university.splice(index-1, 1)
            },

      addline: function(data) {
    
      let values = Object.values(data);
  
			for(let i=0; i<values.length; i++) {
				if(values[i] === "") {
				    alert("빈값을 입력하실 수는 없습니다.")
				    return;
          }
      }
                 this.university.push(data)
			}
    }
	
            
}
</script>

<style>
 .table__content{
  margin-left: auto;
	margin-right: 800px;
 }
 
</style>

