<?php
    $host = 'localhost';
    $username = 'root';
    $password = '';
    $dbname = 'bugme';

    echo '<table id="issues">';
    echo '<tr id="thead">
    <th id="ttitle">Title</th>
    <th>Type</th>
    <th>Status</th>
    <th>Assigned_to</th>
    <th>Created</th>
    </tr>';
    
    $conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $stmt = $conn->query("SELECT id, title, type, status, assigned_to, created FROM issues;");
    $stmt->execute();
    $issues = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $i=1;
    if ($issues) {
        
        // show the publishers
        foreach ($issues as $issue) {
            if($issue['status']=="OPEN"){
                $cd=$issue['created'];
                $changeDate = date("Y-m-d", strtotime($cd));
                $assignedto=$issue['assigned_to'];
                $stmt2 = $conn->query("SELECT firstname, lastname FROM users WHERE id='$assignedto'");
                $stmt2->execute();
                $names = $stmt2->fetchAll(PDO::FETCH_ASSOC);
                $fname=$names[0]['firstname'];
                $lname=$names[0]['lastname'];

                echo '<tr class="issue"> <td class="issuetit">'.$issue['id'].' '.'<a href="php/addticket.php?issueid='.$issue['id'].'&page=viewissue.html">'.$issue['title'].'</a></td><td>'.$issue['type'].'</td>'.'<td class="open-status">'.$issue['status'].'</td><td>'.$fname." ".$lname.'</td>'.'<td>'.$changeDate.'</td>'.'</tr>';
            
            $i++;
        
    }
    }
    echo '</table>';
}

?>