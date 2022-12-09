# Creating CSV file with writeFile

With cypress writeFile() function it is possible to generate 
a CSV file for upload in file upload tests limited to this type of extension.

* **commands and function**:
    - createCsv(header): creates the CSV file with data header.
    - insertLine(line): opens the file and inserts a new line of data into the file
    - randomData(): generates fake data to insert into the file

![Alt text](file.png "CSV file")

* **commands to run project**:
    - `npm run cy:open` OR `npm run cy:run`

