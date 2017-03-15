function doPage(pno,psize){
    var itable = document.getElementById("myData");
    var num = itable.rows.length;//表格所有行数(所有记录数)
    console.log(num);
    var totalPage = 0;//总页数
    var pageSize = psize;//每页显示行数
    //总共分几页 
    if(num/pageSize > parseInt(num/pageSize)){   
            totalPage=parseInt(num/pageSize)+1;   
       }else{   
           totalPage=parseInt(num/pageSize);   
       }   
    var currentPage = pno;//当前页数
    var startRow = (currentPage - 1) * pageSize+1;//开始显示的行  
       var endRow = currentPage * pageSize;//结束显示的行   
       endRow = (endRow > num)? num : endRow;    
       console.log(endRow);
       //遍历显示数据实现分页
    for(var i=1;i<(num+1);i++){    
        var irow = itable.rows[i-1];
        if(i>=startRow && i<=endRow){
            irow.style.display = "table-row";    
        }else{
            irow.style.display = "none";
        }
    }
    var pageEnd = document.getElementById("pageEnd");
    // var tempStr = "共"+num+"条记录  分"+totalPage+"页  当前第"+currentPage+"页  ";
    var tempStr = '';
    if(currentPage>1){
        tempStr += "<a onClick=\"doPage("+(1)+","+psize+")\" class='pageitem'>首页  </a>";
        tempStr += "<a onClick=\"doPage("+(currentPage-1)+","+psize+")\" class='pageitem'>  上一页  </a>"
    }else{
        // tempStr += "首页";
        tempStr += "  上一页  ";    
    }

    if(currentPage<totalPage){
        tempStr += "<a onClick=\"doPage("+(currentPage+1)+","+psize+")\" class='pageitem'>  下一页  </a>";
        tempStr += "<a onClick=\"doPage("+(totalPage)+","+psize+")\" class='pageitem'>  尾页  </a>";
    }else{
        tempStr += "  下一页";
        // tempStr += "尾页";    
    }

    document.getElementById("acbtn").innerHTML = tempStr;
    }