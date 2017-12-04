<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<html>
<body>
      
     <c:forEach items="${castleData.allCastles}" var="castle">
        <p>castleName: ${castle.castleName}</p>
        <p>built: ${castle.built}</p>
        <p>visitTime: ${castle.visitTime}</p>
        <p>condition: ${castle.condition}</p>
        <p>material: ${castle.material}</p>
   </c:forEach>
   
   <a href="index.jsp">Add New Castle</a>
</body>
</html>
