let alg=(str)=>{
  if (str.length===0){
    return "Введите положение рек"
  }
  let arr=str.split("");
  let i=0;
  let sum=0;
  let check=()=>{
    if(arr[i]!=="B"){
      return [i,sum]
    }else{
      i++;
      sum++;
      check();
    }
  }
  check();
  let fun=(i,sum,pos,current)=>{
    if(arr.length<=i+1){
      if(current[1]>2){
        sum++
        pos=pos==="L"?"R":"L"
      }
      if(pos==="L"){
        sum++
      }
      return sum
    }
    else if(arr[i+1]==="B"){
      return fun(i+1,sum+1,pos,current)
    }
    else{
      if(arr[i+1]===current[0]){
        return fun(i+1,sum,pos,[current[0],current[1]+1])
      }
      else{
        if (current[0]!==pos){
          current[0]=arr[i+1];
          current[1]=1;
          return fun(i+1,sum,pos,current)
        }
        else{
          if(current[1]===2){
            if(current[1]==="L"){
              pos="R";
              current[0]=arr[i+1];
              current[1]=1;
              return fun(i+1,sum+1,pos,current)
            }
            else {
              current[0]=arr[i+1];
              current[1]=1;
              return fun(i+1,sum+2,pos,current)
            }
          }
          else if(current[1]>2){
            current[0]=arr[i+1];
            pos=arr[i+1];
            current[1]=1;
            return fun(i+1,sum+1,pos,current)
          }
          else{
            current[0]=arr[i+1];
            current[1]=1;
            return fun(i+1,sum+1,pos,current);
          }
        }
      }
    }
  }
  return fun(i,sum,"L",[arr[i],1])
}
alert(alg(prompt("Введите последовательность рек","")))