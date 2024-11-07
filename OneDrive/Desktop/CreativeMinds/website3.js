<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Creative Minds</title>
    <style>
        /* Basic styling for the body */
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            color: #333;
            margin: 0;
            padding: 0 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        /* Styling for headings */
        h1, h2 {
            color: #4CAF50;
        }

        /* Form styling */
        #talentForm {
            max-width: 500px;
            padding: 20px;
            background-color: #fff;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            margin-bottom: 20px;
            width: 100%;
        }

        #talentForm input, #talentForm textarea, #talentForm button {
            width: 100%;
            padding: 10px;
            margin-top: 10px;
            border-radius: 4px;
            border: 1px solid #ccc;
            font-size: 16px;
        }

        #talentForm button {
            background-color: #4CAF50;
            color: white;
            font-size: 18px;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        #talentForm button:hover {
            background-color: #45a049;
        }

        /* Talent showcase styling */
        #talentList {
            width: 100%;
            max-width: 600px;
        }

        .talent-entry {
            background-color: #fff;
            padding: 15px;
            margin: 10px 0;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            opacity: 0;
            transform: translateY(10px);
            transition: opacity 0.5s, transform 0.5s;
        }

        .talent-entry.fade-in {
            opacity: 1;
            transform: translateY(0);
        }
    </style>
</head>
<body>
    <h1>Welcome to Creative Minds</h1>
    <p>Share your talents and explore others' creations!</p>

    <h2>Showcase Your Talent</h2>
    <form id="talentForm">
        <label for="talentName">Your Name:</label><br>
        <input type="text" id="talentName" required><br><br>

        <label for="talentDescription">Description of Talent:</label><br>
        <textarea id="talentDescription" required></textarea><br><br>

        <button type="submit">Add Talent</button>
    </form>

    <h2>Talent Showcase</h2>
    <div id="talentList">
        <!-- JavaScript will insert talent entries here -->
    </div>
	

    <script src="script.js"></script>
</body>
</html>
