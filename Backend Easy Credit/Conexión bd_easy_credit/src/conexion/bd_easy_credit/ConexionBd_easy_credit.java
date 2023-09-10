/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package conexion.bd_easy_credit;

/**
 *
 * @author carlo
 */
import java.sql.*;
import java.util.logging.Level;
import java.util.logging.Logger;

public class ConexionBd_easy_credit {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {

        String usuario = "root";
        String password = "Valentina080591*";
        String url = "jdbc:mysql://localhost:3306/bd_easy_credit";
        Connection conexion;
        Statement statement;
        ResultSet rs;

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");

        } catch (ClassNotFoundException ex) {
            Logger.getLogger(ConexionBd_easy_credit.class.getName()).log(Level.SEVERE, null, ex);
        }

        try {
            conexion = DriverManager.getConnection(url, usuario, password);
            statement = conexion.createStatement();
            statement.executeUpdate("INSERT INTO USUARIO(NOMBRES, ROL, IDENTIFICACIÓN, TELEFONO, EMAIL, DIRECCIÓN, EDAD) VALUES ('OLIVIA MASO', 'CAJERA', '1400589623', '311456897', 'olivia@hotmail.com', 'Calle 10 este #245', '20')");
            rs = statement.executeQuery("SELECT * FROM USUARIO");
            rs.next();
            do{
                System.out.println(rs.getInt("id_usuario")+ " : " +rs.getString("nombres")+ " : "+rs.getString("identificación"));
            }while (rs.next());
            
        } catch (SQLException ex) {
            Logger.getLogger(ConexionBd_easy_credit.class.getName()).log(Level.SEVERE, null, ex);
        }

    }

}
