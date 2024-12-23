import java.util.Scanner;

class CC_2{
    public static void main(String args[])
    {
        // get 3 inputs,add all and store in e , multiply all and store in e ,now divide d by e.
        Scanner john = new Scanner(System.in);
        int a = john.nextInt();
        int b = john.nextInt();
        int c = john.nextInt();
        int d = a*b*c;
        int e = a+b+c;
        System.out.print(d/e);

        // get name,score,dept and convert score out of 10.
        String Name = john.nextLine();
        double Score = john.nextDouble();
        john.nextLine();
        String Department = john.nextLine();
       
        System.out.print(Score/10);
    }
}