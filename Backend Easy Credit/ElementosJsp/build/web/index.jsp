<%-- 
    Document   : index
    Created on : 8/09/2023, 8:32:43 p. m.
    Author     : carlo
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Formas de insertar código Java en JSP</title>
    </head>
    <body>
        <h1>Formas de insertar código Java en JSP</h1>               
         <h1>Expresiones </h1> 
         
        <div><%= new String ("easy credit").toUpperCase() %> </div>       
      
        <div>La suma de los números 20+10 es: <%= 20+10 %> </div>
        
        <div>15 Es mayor que 19: <%= 15>19 %> </div> 
        
        <h1>Scriptlets </h1>
         
              
             <%
              for (int i = 0; i<10; i++){
              out.print("<br> Tipo Scriptlets" + i);
                 }   
                 %> 
        
         <h1>Declaraciones </h1>   
         
         <%!
             private int total;

             public int metodoSuma(int a, int b){

                return a+b;
                   }
             %>
             
            El resultado de la suma es: <%= metodoSuma(15, 13)%>
             
    </body>
</html>
