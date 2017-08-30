<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<%@ taglib prefix="f" uri="http://www.springframework.org/tags/form" %> 
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<link type="text/css" rel="stylesheet" href="styles/reg.css">
</head>
<body>
<section>
<f:form class="regForm" action="" method="" commandName="customer">
<f:label path="firstName">First Name</f:label>
<f:input path="firstName"/>
<f:errors path="firstName" class="error"></f:errors>
<f:label path="lastName">Last Name</f:label>
<f:input path="lastName"/>
<f:errors path="lastName" class="error"></f:errors>
<f:label path="address">Address</f:label>
<f:textarea path="address"/>
<f:errors path="address" class="error"></f:errors>
<f:label path="email">Email</f:label>
<f:input path="email"/>
<f:errors path="email" class="error"></f:errors>
<input type="submit" value="submit">
</f:form>
</section>
</body>
</html>