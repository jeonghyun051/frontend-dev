<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="${pageContext.request.contextPath }/jquery/jquery-3.6.0.js" type="text/javascript"></script>
<script>
	$(function(){
		$("button").click(function(){
			$("p").load("${pageContext.request.contextPath }/api/html p"); // p라는 태그 데이터를 사용
		})
	})
</script>
</head>
<body>
	<h1>AJAX Test - HTML Format Message(Data)</h1>
	<button>변경</button>
	<p>변경전</p>
</body>
</html>