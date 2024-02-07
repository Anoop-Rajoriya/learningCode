import java.util.*;

class spiral_Matrix
{


    public void spiralMatrix ()
    {
        Scanner sc = new Scanner(System.in);

        System.out.print("enter matrix size col x raw : ");
        int col = sc.nextInt();
        int raw = sc.nextInt();

        System.out.print("enter matrix elm : ");
        
        int Matrix [][] = new int [raw][col];

        for(int i = 0; i<raw; i++)
        {
            for(int j = 0; j<col; j++)
            {
                Matrix[i][j] = sc.nextInt();
            }
        }

        // for(int i = 0; i<raw; i++)
        // {
        //     for(int j = 0; j<col; j++)
        //     {
        //         System.out.print(Matrix[i][j] + " ");
        //     }
        //     System.out.println();
        // }

        // spiral order array

        int rawStart = 0;
        int rawEnd = raw-1;

        int colStart = 0;
        int colEnd = col-1;

        while ((rawStart <= rawEnd) && (colStart <= colEnd))
        {
            for(int colstart = colStart; colstart<=colEnd; colstart++ )
            {
                System.out.print(Matrix[rawStart][colstart] + " ");
            }

            rawStart++;
            for(int rawstart = rawStart; rawstart <= rawEnd; rawstart++)
            {
                System.out.print(Matrix[rawstart][colEnd] + " ");
            }

            colEnd--;
            for(int colend = colEnd; colend >= colStart; colend--)
            {
                System.out.print(Matrix[rawEnd][colend] + " ");
            }
            
            rawEnd--;
            for(int rawend = rawEnd; rawend >= rawStart; rawend--)
            {
                System.out.print(Matrix[rawend][colStart] + " ");
            }

            colStart++;

        }
    }



    
    public static void main(String [] str)
    {
        System.out.println("hello world");
        
        spiral_Matrix obj = new spiral_Matrix();

        obj.spiralMatrix();
    }
}