export const courseData = [
  {
    id: "topic-1",
    title: "Деревня Переменных",
    items: [
      {
        type: "lesson",
        id: "variables-intro",
        title: "Что такое переменная",
        theoryBlocks: [
          { type: "title", content: "Переменные в C#" },
          { type: "text", content: "Переменная — это именованная область памяти, где хранится значение. Представь коробку с подписью: в коробке лежит что-то, а подпись говорит что именно." },
          { type: "code", content: `int age = 18;\nstring name = "Ilya";\nbool isStudent = true;` },
          { type: "text", content: "Слева — тип данных, потом имя переменной, потом значение через знак =." }
        ]
      },
      {
        type: "lesson",
        id: "data-types",
        title: "Основные типы данных",
        theoryBlocks: [
          { type: "title", content: "Типы данных" },
          { type: "text", content: "Каждая переменная имеет тип — он говорит компилятору, что именно хранится в памяти." },
          { type: "subtitle", content: "Числа" },
          { type: "code", content: `int count = 10;       // целое число\ndouble price = 9.99;  // дробное число` },
          { type: "subtitle", content: "Текст и логика" },
          { type: "code", content: `string title = "C# Study";\nbool isActive = false;` },
          { type: "text", content: "Использование правильного типа важно: если хранить деньги в int, дробная часть будет потеряна." }
        ]
      },
      {
        type: "task",
        id: "task-types",
        title: "Задание: типы данных",
        taskType: "single-choice",
        npcText: "Рыцарь! Мне нужно хранить цену товара — 49.99. Какой тип выбрать?",
        question: "Какой тип данных подходит для хранения дробных чисел?",
        answers: ["int", "bool", "double", "string"],
        correctIndex: 2,
        rewardXp: 10
      },
      {
        type: "lesson",
        id: "constants",
        title: "Константы",
        theoryBlocks: [
          { type: "title", content: "Константы" },
          { type: "text", content: "Константа — это переменная, значение которой нельзя изменить после объявления. Используй ключевое слово const." },
          { type: "code", content: `const double Pi = 3.14159;\nconst string AppName = "C# Study";` },
          { type: "text", content: "Если попытаться изменить константу — компилятор выдаст ошибку. Это защищает важные значения от случайного изменения." }
        ]
      },
      {
        type: "lesson",
        id: "type-conversion",
        title: "Приведение типов",
        theoryBlocks: [
          { type: "title", content: "Приведение типов" },
          { type: "text", content: "Иногда нужно преобразовать один тип в другой. Есть явное и неявное приведение." },
          { type: "code", content: `int a = 10;\ndouble b = a;        // неявное: int → double\n\ndouble x = 9.7;\nint y = (int)x;      // явное: double → int, дробь теряется` },
          { type: "text", content: "Явное приведение пишется в скобках перед значением. Будь осторожен — данные могут теряться." }
        ]
      },
      {
        type: "task",
        id: "task-conversion",
        title: "Задание: приведение типов",
        taskType: "fill-in-blank",
        npcText: "Рыцарь! Мне нужно явно привести double к int, но я забыл синтаксис!",
        codeTemplate: `double x = 9.7;\nint y = ___(x);`,
        blank: "(int)",
        rewardXp: 15
      },
      {
        type: "task",
        id: "task-variables-match",
        title: "Задание: сопоставь типы",
        taskType: "match-pairs",
        npcText: "Рыцарь! Помоги разложить типы по полкам!",
        pairs: [
          { left: "int", right: "42" },
          { left: "double", right: "3.14" },
          { left: "string", right: "\"hello\"" },
          { left: "bool", right: "true" }
        ],
        rewardXp: 15
      }
    ]
  },
  {
    id: "topic-2",
    title: "Замок Условий",
    items: [
      {
        type: "lesson",
        id: "if-else",
        title: "Оператор if/else",
        theoryBlocks: [
          { type: "title", content: "Условный оператор if/else" },
          { type: "text", content: "Оператор if позволяет выполнить разный код в зависимости от условия." },
          { type: "code", content: `int age = 20;\n\nif (age >= 18) {\n    Console.WriteLine("Доступ разрешён");\n} else {\n    Console.WriteLine("Доступ закрыт");\n}` }
        ]
      },
      {
        type: "lesson",
        id: "logical-operators",
        title: "Логические операторы",
        theoryBlocks: [
          { type: "title", content: "Логические операторы" },
          { type: "text", content: "Логические операторы позволяют объединять несколько условий в одно." },
          { type: "code", content: `bool a = true;\nbool b = false;\n\nConsole.WriteLine(a && b); // И: false\nConsole.WriteLine(a || b); // ИЛИ: true\nConsole.WriteLine(!a);     // НЕ: false` },
          { type: "text", content: "&&  — оба должны быть true. || — достаточно одного true. ! — инвертирует значение." }
        ]
      },
      {
        type: "task",
        id: "task-if-fill",
        title: "Задание: дополни условие",
        taskType: "fill-in-blank",
        npcText: "Стражник кричит: мой код пускает всех подряд! Вставь пропущенное слово!",
        codeTemplate: `___ (age >= 18) {\n    Console.WriteLine("Добро пожаловать");\n}`,
        blank: "if",
        rewardXp: 10
      },
      {
        type: "lesson",
        id: "switch",
        title: "Оператор switch",
        theoryBlocks: [
          { type: "title", content: "Оператор switch" },
          { type: "text", content: "Switch удобен когда нужно сравнить переменную с несколькими конкретными значениями." },
          { type: "code", content: `string day = "Monday";\n\nswitch (day) {\n    case "Monday":\n        Console.WriteLine("Понедельник");\n        break;\n    case "Friday":\n        Console.WriteLine("Пятница");\n        break;\n    default:\n        Console.WriteLine("Другой день");\n        break;\n}` }
        ]
      },
      {
        type: "lesson",
        id: "ternary",
        title: "Тернарный оператор",
        theoryBlocks: [
          { type: "title", content: "Тернарный оператор" },
          { type: "text", content: "Тернарный оператор — это краткая форма if/else для простых условий." },
          { type: "code", content: `int age = 20;\nstring result = age >= 18 ? "Взрослый" : "Ребёнок";\nConsole.WriteLine(result);` },
          { type: "text", content: "Синтаксис: условие ? значение_если_true : значение_если_false" }
        ]
      },
      {
        type: "task",
        id: "task-conditions-order",
        title: "Задание: собери условие",
        taskType: "code-order",
        npcText: "Маг перепутал строки заклинания! Расставь их правильно!",
        description: "Расставь строки так, чтобы программа проверяла доступ по возрасту",
        lines: [
          "int age = 20;",
          "if (age >= 18) {",
          '    Console.WriteLine("Доступ разрешён");',
          "}"
        ],
        correctOrder: [0, 1, 2, 3],
        rewardXp: 20
      },
      {
        type: "task",
        id: "task-conditions-bug",
        title: "Задание: найди баг",
        taskType: "find-the-bug",
        npcText: "Рыцарь! Моя программа падает — найди ошибку в коде!",
        lines: [
          "int x = 10;",
          "if (x = 10) {",
          '    Console.WriteLine("Равно 10");',
          "}"
        ],
        bugLineIndex: 1,
        explanation: "Использован = вместо ==. Одно равно — это присваивание, два — сравнение.",
        rewardXp: 20
      }
    ]
  },
  {
    id: "topic-3",
    title: "Лабиринт Циклов",
    items: [
      {
        type: "lesson",
        id: "for-loop",
        title: "Цикл for",
        theoryBlocks: [
          { type: "title", content: "Цикл for" },
          { type: "text", content: "Цикл for используется когда заранее известно, сколько раз нужно повторить действие." },
          { type: "code", content: `for (int i = 0; i < 5; i++) {\n    Console.WriteLine(i);\n}` },
          { type: "text", content: "int i = 0 — начало. i < 5 — условие продолжения. i++ — шаг (увеличение на 1)." }
        ]
      },
      {
        type: "lesson",
        id: "while-loop",
        title: "Цикл while",
        theoryBlocks: [
          { type: "title", content: "Цикл while" },
          { type: "text", content: "While выполняется пока условие истинно. Удобен когда количество итераций заранее неизвестно." },
          { type: "code", content: `int count = 0;\n\nwhile (count < 3) {\n    Console.WriteLine(count);\n    count++;\n}` },
          { type: "text", content: "Важно не забыть изменять переменную внутри цикла — иначе получишь бесконечный цикл." }
        ]
      },
      {
        type: "task",
        id: "task-for-order",
        title: "Задание: собери цикл",
        taskType: "code-order",
        npcText: "Фермер перепутал строки урожайного заклинания! Помоги собрать цикл!",
        description: "Расставь строки чтобы получился правильный цикл for",
        lines: [
          "for (int i = 0; i < 5; i++)",
          "{",
          "    Console.WriteLine(i);",
          "}"
        ],
        correctOrder: [0, 1, 2, 3],
        rewardXp: 20
      },
      {
        type: "lesson",
        id: "foreach-loop",
        title: "Цикл foreach",
        theoryBlocks: [
          { type: "title", content: "Цикл foreach" },
          { type: "text", content: "Foreach удобен для перебора элементов коллекции — не нужно следить за индексом." },
          { type: "code", content: `string[] names = { "Alice", "Bob", "Charlie" };\n\nforeach (string name in names) {\n    Console.WriteLine(name);\n}` }
        ]
      },
      {
        type: "lesson",
        id: "break-continue",
        title: "break и continue",
        theoryBlocks: [
          { type: "title", content: "break и continue" },
          { type: "text", content: "break — прерывает цикл полностью. continue — пропускает текущую итерацию и идёт к следующей." },
          { type: "code", content: `for (int i = 0; i < 10; i++) {\n    if (i == 3) continue; // пропустить 3\n    if (i == 7) break;    // остановиться на 7\n    Console.WriteLine(i);\n}` }
        ]
      },
      {
        type: "task",
        id: "task-loops-choice",
        title: "Задание: выбери цикл",
        taskType: "single-choice",
        npcText: "Нужно перебрать всех жителей деревни. Какой цикл удобнее всего?",
        question: "Какой цикл лучше всего подходит для перебора элементов массива?",
        answers: ["for", "while", "foreach", "do-while"],
        correctIndex: 2,
        rewardXp: 10
      },
      {
        type: "task",
        id: "task-loops-bug",
        title: "Задание: найди баг",
        taskType: "find-the-bug",
        npcText: "Лабиринт не заканчивается — цикл бесконечный! Найди ошибку!",
        lines: [
          "int i = 0;",
          "while (i < 5) {",
          '    Console.WriteLine(i);',
          "}"
        ],
        bugLineIndex: 3,
        explanation: "Нет i++ внутри цикла. Переменная i никогда не меняется, цикл бесконечен.",
        rewardXp: 20
      }
    ]
  },
  {
    id: "topic-4",
    title: "Башня Методов",
    items: [
      {
        type: "lesson",
        id: "methods-intro",
        title: "Объявление методов",
        theoryBlocks: [
          { type: "title", content: "Методы в C#" },
          { type: "text", content: "Метод — это именованный блок кода. Пишешь один раз, вызываешь сколько угодно раз." },
          { type: "code", content: `void SayHello() {\n    Console.WriteLine("Hello!");\n}\n\nSayHello(); // вызов` },
          { type: "text", content: "void означает что метод ничего не возвращает. SayHello — имя метода." }
        ]
      },
      {
        type: "lesson",
        id: "method-params",
        title: "Параметры методов",
        theoryBlocks: [
          { type: "title", content: "Параметры" },
          { type: "text", content: "Параметры позволяют передавать данные в метод." },
          { type: "code", content: `void Greet(string name) {\n    Console.WriteLine("Привет, " + name + "!");\n}\n\nGreet("Ilya");   // Привет, Ilya!\nGreet("Alice");  // Привет, Alice!` }
        ]
      },
      {
        type: "task",
        id: "task-methods-bug",
        title: "Задание: найди баг",
        taskType: "find-the-bug",
        npcText: "Маг кричит: моё заклинание не работает! Найди ошибку!",
        lines: [
          "void SayHello()",
          "{",
          '    Console.WriteLine("Hello")',
          "}"
        ],
        bugLineIndex: 2,
        explanation: "Пропущена точка с запятой в конце строки с Console.WriteLine.",
        rewardXp: 20
      },
      {
        type: "lesson",
        id: "return-values",
        title: "Возвращаемые значения",
        theoryBlocks: [
          { type: "title", content: "Возвращаемые значения" },
          { type: "text", content: "Метод может вернуть результат. Вместо void пишем тип возвращаемого значения и используем return." },
          { type: "code", content: `int Add(int a, int b) {\n    return a + b;\n}\n\nint result = Add(3, 5);\nConsole.WriteLine(result); // 8` }
        ]
      },
      {
        type: "lesson",
        id: "method-overload",
        title: "Перегрузка методов",
        theoryBlocks: [
          { type: "title", content: "Перегрузка методов" },
          { type: "text", content: "В C# можно создать несколько методов с одинаковым именем, но разными параметрами." },
          { type: "code", content: `int Add(int a, int b) {\n    return a + b;\n}\n\ndouble Add(double a, double b) {\n    return a + b;\n}\n\nConsole.WriteLine(Add(2, 3));       // 5\nConsole.WriteLine(Add(1.5, 2.5));   // 4.0` },
          { type: "text", content: "Компилятор сам выберет нужную версию метода в зависимости от типа аргументов." }
        ]
      },
      {
        type: "task",
        id: "task-methods-choice",
        title: "Задание: тип метода",
        taskType: "single-choice",
        npcText: "Башенный страж спрашивает: что написать вместо void, если метод должен вернуть число?",
        question: "Какой тип возврата указать для метода, который возвращает целое число?",
        answers: ["void", "return", "int", "number"],
        correctIndex: 2,
        rewardXp: 10
      },
      {
        type: "task",
        id: "task-methods-match",
        title: "Задание: сопоставь понятия",
        taskType: "match-pairs",
        npcText: "Помоги магу разложить свитки по полкам!",
        pairs: [
          { left: "void", right: "Метод ничего не возвращает" },
          { left: "return", right: "Возврат значения из метода" },
          { left: "параметр", right: "Данные, передаваемые в метод" },
          { left: "перегрузка", right: "Методы с одним именем, но разными параметрами" }
        ],
        rewardXp: 20
      }
    ]
  },
  {
    id: "topic-5",
    title: "Рынок Массивов",
    items: [
      {
        type: "lesson",
        id: "arrays-intro",
        title: "Массивы",
        theoryBlocks: [
          { type: "title", content: "Массивы в C#" },
          { type: "text", content: "Массив хранит несколько значений одного типа под одним именем. Элементы нумеруются с нуля." },
          { type: "code", content: `int[] numbers = { 10, 20, 30, 40, 50 };\n\nConsole.WriteLine(numbers[0]); // 10\nConsole.WriteLine(numbers[4]); // 50\nConsole.WriteLine(numbers.Length); // 5` }
        ]
      },
      {
        type: "lesson",
        id: "arrays-loops",
        title: "Перебор массива",
        theoryBlocks: [
          { type: "title", content: "Перебор массива" },
          { type: "text", content: "Массивы удобно перебирать циклами." },
          { type: "code", content: `int[] scores = { 5, 3, 8, 1, 9 };\n\n// через for:\nfor (int i = 0; i < scores.Length; i++) {\n    Console.WriteLine(scores[i]);\n}\n\n// через foreach:\nforeach (int score in scores) {\n    Console.WriteLine(score);\n}` }
        ]
      },
      {
        type: "task",
        id: "task-arrays-order",
        title: "Задание: собери перебор",
        taskType: "code-order",
        npcText: "Торговец перепутал все ценники! Расставь код правильно!",
        description: "Собери цикл перебора массива в правильном порядке",
        lines: [
          'string[] items = { "меч", "щит", "зелье" };',
          "foreach (string item in items)",
          "{",
          "    Console.WriteLine(item);",
          "}"
        ],
        correctOrder: [0, 1, 2, 3, 4],
        rewardXp: 20
      },
      {
        type: "lesson",
        id: "lists",
        title: "Списки List",
        theoryBlocks: [
          { type: "title", content: "List в C#" },
          { type: "text", content: "List — это динамический массив. В отличие от обычного массива, его размер можно менять." },
          { type: "code", content: `List<string> names = new List<string>();\n\nnames.Add("Alice");\nnames.Add("Bob");\nnames.Remove("Alice");\n\nConsole.WriteLine(names.Count); // 1` }
        ]
      },
      {
        type: "lesson",
        id: "multidimensional",
        title: "Многомерные массивы",
        theoryBlocks: [
          { type: "title", content: "Многомерные массивы" },
          { type: "text", content: "Двумерный массив — это таблица из строк и столбцов." },
          { type: "code", content: `int[,] grid = {\n    { 1, 2, 3 },\n    { 4, 5, 6 }\n};\n\nConsole.WriteLine(grid[0, 0]); // 1\nConsole.WriteLine(grid[1, 2]); // 6` }
        ]
      },
      {
        type: "task",
        id: "task-arrays-match",
        title: "Задание: сопоставь операции",
        taskType: "match-pairs",
        npcText: "Помоги торговцу разобрать товар по полкам!",
        pairs: [
          { left: "numbers[0]", right: "Первый элемент массива" },
          { left: ".Length", right: "Количество элементов" },
          { left: ".Add()", right: "Добавить элемент в List" },
          { left: ".Remove()", right: "Удалить элемент из List" }
        ],
        rewardXp: 20
      },
      {
        type: "task",
        id: "task-arrays-bug",
        title: "Задание: найди баг",
        taskType: "find-the-bug",
        npcText: "Программа торговца падает с ошибкой! Найди где!",
        lines: [
          'int[] prices = { 10, 20, 30 };',
          "Console.WriteLine(prices[3]);"
        ],
        bugLineIndex: 1,
        explanation: "Индекс 3 выходит за пределы массива. У массива из 3 элементов индексы: 0, 1, 2.",
        rewardXp: 20
      }
    ]
  }
];

// =============================================================================
// plotCourseData — новая структура курса с сюжетом.
// Source of truth: firstTheme.md ... fifthTheme.md + backend_requirements.md.
//
// Форма каждой темы (topic):
//   id, title, subtitle, reference (отсылка), order
//   currency        — валюта локации { id, title }
//   npcs            — массив { id, name, role, description }
//   storyPage       — сюжетная страница в начале темы (kind: "story")
//   theoryPages     — массив страниц теории { id, title, blocks[] }
//   tasks           — массив заданий (role: "story" | "side")
//   finalAction     — кнопка финала темы { id, title, cost, cutsceneBlocks[] }
//
// Форма задания (task):
//   id, role, type, title, theoryPageId, npcId, npcText, rewardXp, rewardCurrency
//   плюс payload, специфичный для type:
//     single-choice : { question, options[], correctIndex }
//     fill-in-blank : { codeTemplate, blank, correctAnswer }
//     match-pairs   : { pairs[{ left, right }] }
//     code-order    : { description, lines[], correctOrder[] }
//     find-the-bug  : { lines[], bugLineIndex, explanation, fixedLine? }
//
// ВАЖНО: многие тексты — рабочие черновики, отмечены через `status: "draft"`
// или `status: "idea"`. Финализированные — `status: "final"`.
// =============================================================================

export const plotCourseData = [
  // ===========================================================================
  // ТЕМА 1 — СКРЫТАЯ ДЕРЕВНЯ (Переменные, типы, ввод-вывод). Отсылка: Наруто.
  // ===========================================================================
  {
    id: "topic-1",
    order: 1,
    title: "Скрытая Деревня",
    subtitle: "Переменные, типы и базовый ввод-вывод",
    reference: "Наруто",
    currency: { id: "knowledge_scrolls", title: "Свитки знаний" },
    npcs: [
      { id: "elder", name: "Старейшина", role: "main_story", description: "Старейшина деревни. Узнаёт # и называет по имени — это первый возврат памяти." },
      { id: "oturan", name: "Отуран", role: "main_side", description: "Молодой ниндзя, мечтает стать великим и старейшиной деревни. Имя — Наруто наоборот." },
      { id: "merchant", name: "Торговец", role: "background", description: "Безымянный торговец. Задания про арифметику и строки." }
    ],
    storyPage: {
      id: "t1-story-intro",
      kind: "story",
      title: "Пробуждение",
      blocks: [
        { type: "title", content: "Скрытая Деревня" },
        { type: "text", content: "# открывает глаза. Деревянный потолок, запах хвои, тишина — слишком долгая для деревни ниндзя." },
        { type: "text", content: "Над ним склоняется Старейшина. Спокойно, без удивления: «Ты вернулся. Год тебя не было.»" },
        { type: "text", content: "Год. Принцесса C похищена. Столицу удерживает кто-то по имени Null. # не помнит даже своего имени." },
        { type: "subtitle", content: "Что от тебя нужно" },
        { type: "text", content: "Деревня увядает: Null разболтал секреты, свитки утеряны, жители уходят. Помоги Старейшине восстановить восемь свитков знаний — и деревня снова начнёт дышать." }
      ]
    },
    theoryPages: [
      {
        id: "t1-l1-var-concept",
        kind: "theory",
        title: "Что такое переменная",
        blocks: [
          { type: "title", content: "Переменная" },
          { type: "text", content: "Переменная — это именованная ячейка памяти. Старейшина называет это «свитком»: у каждого свитка есть подпись (имя) и содержимое (значение)." },
          { type: "code", content: `int age = 18;` },
          { type: "text", content: "Слева тип (int — целое число), потом имя (age), потом значение через знак =." }
        ]
      },
      {
        id: "t1-l2-types",
        kind: "theory",
        title: "Типы данных и объявление",
        blocks: [
          { type: "title", content: "Базовые типы" },
          { type: "text", content: "У каждого свитка есть «природа чакры» — тип данных. Он говорит, что именно лежит внутри." },
          { type: "code", content: `int count = 10;       // целые числа\ndouble price = 9.99;  // дробные числа\nbool isReady = true;  // логическое (true/false)\nchar letter = 'A';    // один символ` },
          { type: "text", content: "Тип нужно подбирать под задачу. Хранить деньги в int — потеряешь копейки." }
        ]
      },
      {
        id: "t1-l3-strings",
        kind: "theory",
        title: "Строки",
        blocks: [
          { type: "title", content: "Строки" },
          { type: "text", content: "Строка (string) — это последовательность символов в двойных кавычках." },
          { type: "code", content: `string name = "Отуран";\nstring hello1 = "Привет, " + name;     // конкатенация\nstring hello2 = $"Привет, {name}";    // интерполяция\nchar first = name[0];                 // обращение по индексу` },
          { type: "text", content: "Спецсимволы экранируются обратной чертой: \\n — перенос строки, \\\" — кавычка внутри строки." }
        ]
      },
      {
        id: "t1-l4-const",
        kind: "theory",
        title: "Константы",
        blocks: [
          { type: "title", content: "Константы" },
          { type: "text", content: "Если значение никогда не должно меняться — объяви его как const. Это «запечатанный свиток»." },
          { type: "code", content: `const double Pi = 3.14159;\nconst string AppName = "C# Study";` },
          { type: "text", content: "Попытка переписать const — ошибка компиляции. Никаких исключений в рантайме, всё ловится сразу." }
        ]
      },
      {
        id: "t1-l5-io",
        kind: "theory",
        title: "Консольный ввод и вывод",
        blocks: [
          { type: "title", content: "Console.WriteLine и Console.ReadLine" },
          { type: "text", content: "Чтобы что-то вывести — WriteLine. Чтобы прочитать ввод пользователя — ReadLine." },
          { type: "code", content: `Console.WriteLine("Как тебя зовут?");\nstring name = Console.ReadLine();\nConsole.WriteLine($"Здравствуй, {name}");` },
          { type: "text", content: "ReadLine всегда возвращает string. Если нужно число — придётся преобразовать." }
        ]
      },
      {
        id: "t1-l6-arithmetic",
        kind: "theory",
        title: "Арифметика",
        blocks: [
          { type: "title", content: "Арифметические операции" },
          { type: "code", content: `int a = 7;\nint b = 2;\n\nConsole.WriteLine(a + b);  // 9\nConsole.WriteLine(a - b);  // 5\nConsole.WriteLine(a * b);  // 14\nConsole.WriteLine(a / b);  // 3 — целочисленное деление!\nConsole.WriteLine(a % b);  // 1 — остаток` },
          { type: "text", content: "Когда оба операнда — целые, деление тоже целое: 7 / 2 = 3, дробная часть отброшена. Хочешь дробь — хотя бы один операнд должен быть double." }
        ]
      },
      {
        id: "t1-l7-cast",
        kind: "theory",
        title: "Приведение типов",
        blocks: [
          { type: "title", content: "Преобразование типов" },
          { type: "text", content: "Неявное приведение: компилятор сам, если безопасно." },
          { type: "code", content: `int a = 10;\ndouble b = a;     // OK, int спокойно становится double` },
          { type: "text", content: "Явное приведение: ты сам пишешь тип в скобках. Может терять данные." },
          { type: "code", content: `double x = 9.7;\nint y = (int)x;   // 9 — дробная часть отбрасывается` }
        ]
      }
    ],
    tasks: [
      {
        id: "t1-task-1", role: "story", type: "single-choice", status: "final",
        title: "Старейшина: что такое свиток",
        theoryPageId: "t1-l1-var-concept", npcId: "elder",
        npcText: "Старейшина смотрит внимательно. «Прежде чем доверить тебе свитки — скажи. Что такое переменная?»",
        question: "Что такое переменная?",
        options: ["именованная ячейка памяти", "команда вывода", "название функции", "название типа"],
        correctIndex: 0,
        rewardXp: 10, rewardCurrency: 1
      },
      {
        id: "t1-task-2", role: "story", type: "match-pairs", status: "final",
        title: "Свитки без подписей",
        theoryPageId: "t1-l2-types", npcId: "elder",
        npcText: "«Null стёр подписи. Расставь обратно — какое значение какой природы.»",
        pairs: [
          { left: "42",   right: "int"    },
          { left: "3.14", right: "double" },
          { left: "true", right: "bool"   },
          { left: "'A'",  right: "char"   }
        ],
        rewardXp: 15, rewardCurrency: 1
      },
      {
        id: "t1-task-3", role: "story", type: "fill-in-blank", status: "final",
        title: "Знакомство с Отураном",
        theoryPageId: "t1-l2-types", npcId: "oturan",
        npcText: "Подбегает молодой ниндзя: «Я стану великим! Сделай первую запись с моим именем — и потом ты будешь первым, кто меня знал!»",
        codeTemplate: `___ name = "Отуран";`,
        blank: "string", correctAnswer: "string",
        rewardXp: 15, rewardCurrency: 1
      },
      {
        id: "t1-task-4", role: "story", type: "single-choice", status: "final",
        title: "Старейшина: правила именования",
        theoryPageId: "t1-l1-var-concept", npcId: "elder",
        npcText: "«Свиток с плохой подписью никто не сможет найти. Какое имя подходит?»",
        question: "Какое имя подходит для переменной?",
        options: ["123name", "myName", "name!", "for"],
        correctIndex: 1,
        explanation: "123name — начинается с цифры; name! — спецсимвол; for — зарезервированное слово.",
        rewardXp: 10, rewardCurrency: 1
      },
      {
        id: "t1-task-5", role: "story", type: "code-order", status: "final",
        title: "Зачитать заклинание",
        theoryPageId: "t1-l5-io", npcId: "elder",
        npcText: "«Заклинание срабатывает только когда его произнесут вслух. Собери код.»",
        description: "Расставь строки: сначала объяви свиток с заклинанием, потом выведи его в консоль.",
        lines: [
          `string spell = "Огненный шар!";`,
          `Console.WriteLine(spell);`
        ],
        correctOrder: [0, 1],
        rewardXp: 15, rewardCurrency: 1
      },
      {
        id: "t1-task-6", role: "story", type: "fill-in-blank", status: "final",
        title: "Старейшина шепчет ответ",
        theoryPageId: "t1-l5-io", npcId: "elder",
        npcText: "«Запиши то, что я скажу.» Старейшина шепчет — нужно прочитать его слова в переменную.",
        codeTemplate: `string answer = Console.___();`,
        blank: "ReadLine", correctAnswer: "ReadLine",
        rewardXp: 15, rewardCurrency: 1
      },
      {
        id: "t1-task-7", role: "story", type: "fill-in-blank", status: "final",
        title: "Перевод чакры",
        theoryPageId: "t1-l7-cast", npcId: "elder",
        npcText: "«Чакра воды (double) должна стать чакрой земли (int). Явно. Иначе компилятор не пропустит.»",
        codeTemplate: `double damage = 9.7;\nint hit = ___(damage);`,
        blank: "(int)", correctAnswer: "(int)",
        rewardXp: 15, rewardCurrency: 1
      },
      {
        id: "t1-task-8", role: "side", type: "single-choice", status: "final",
        title: "Запечатанный свиток",
        theoryPageId: "t1-l4-const", npcId: "oturan",
        npcText: "Отуран в стороне сосредоточенно скребёт свиток. «Я тут хочу переписать… а оно не даётся!»",
        question: "Что произойдёт, если попытаться изменить переменную, объявленную как const?",
        options: [
          "значение изменится",
          "компилятор выдаст ошибку",
          "программа упадёт при запуске",
          "ничего не произойдёт"
        ],
        correctIndex: 1,
        rewardXp: 10, rewardCurrency: 0
      },
      {
        id: "t1-task-9", role: "side", type: "single-choice", status: "final",
        title: "«5» + «3»",
        theoryPageId: "t1-l3-strings", npcId: "merchant",
        npcText: "Торговец возмущён: «Записал цену и налог, а свиток показывает какую-то ерунду!»",
        question: `Что выведет код Console.WriteLine("5" + "3"); ?`,
        options: ["8", "\"53\"", "35", "ошибка компиляции"],
        correctIndex: 1,
        explanation: `Для строк "+" — это конкатенация, не сложение. Числа были бы — было бы 8.`,
        rewardXp: 10, rewardCurrency: 0
      },
      {
        id: "t1-task-10", role: "side", type: "single-choice", status: "final",
        title: "Странный счёт у торговца",
        theoryPageId: "t1-l6-arithmetic", npcId: "merchant",
        npcText: "«Делю 7 на 2 — а получается 3. Половина куда-то делась!»",
        question: "Что выведет код  int a = 7; int b = 2; Console.WriteLine(a / b);  ?",
        options: ["3", "3.5", "4", "ошибка"],
        correctIndex: 0,
        explanation: "Целочисленное деление: 7 / 2 = 3, остаток отбрасывается.",
        rewardXp: 10, rewardCurrency: 0
      },
      {
        id: "t1-task-11", role: "side", type: "fill-in-blank", status: "final",
        title: "Приветствие Отурана",
        theoryPageId: "t1-l3-strings", npcId: "oturan",
        npcText: "«Хочу, чтобы про меня знали! Напиши приветствие — но красиво, с интерполяцией!»",
        codeTemplate: `string name = "Отуран";\nConsole.WriteLine($"Привет, ___!");`,
        blank: "{name}", correctAnswer: "{name}",
        rewardXp: 15, rewardCurrency: 0
      },
      {
        id: "t1-task-12", role: "story", type: "find-the-bug", status: "final",
        title: "Экзамен у Старейшины",
        theoryPageId: "t1-l4-const", npcId: "elder",
        npcText: "«Это программа моего ученика. Один баг. Найди.»",
        lines: [
          "const int MaxHealth = 100;",
          "int currentHealth = 80;",
          "int healAmount = 25;",
          "currentHealth = currentHealth + healAmount;",
          "MaxHealth = currentHealth;",
          `Console.WriteLine($"Здоровье: {currentHealth}");`
        ],
        bugLineIndex: 4,
        explanation: "MaxHealth объявлена как const — её нельзя переприсваивать. Компилятор выдаст ошибку.",
        rewardXp: 25, rewardCurrency: 1
      }
    ],
    finalAction: {
      id: "t1-restore-archive",
      title: "Восстановить архив деревни",
      cost: 6,
      cutsceneBlocks: [
        { type: "title", content: "Восстановление архива" },
        { type: "text", content: "# раскладывает шесть собранных свитков у ног Старейшины. Тот разворачивает их один за другим, кладёт в нужные ниши." },
        { type: "text", content: "Архив дышит. Где-то на улице слышен смех — впервые за год дети снова бегают по дороге к колодцу." },
        { type: "text", content: "Старейшина поднимает на # глаза. «Я знал твоего отца. И тебя я тоже знаю, рыцарь #.»" },
        { type: "subtitle", content: "Возврат памяти" },
        { type: "text", content: "# вспоминает своё имя. Маленький кусочек, но первый." }
      ]
    }
  },

  // ===========================================================================
  // ТЕМА 2 — ЛЕС ГИГАНТСКИХ ДЕРЕВЬЕВ (Условия). Отсылка: Атака Титанов.
  // ===========================================================================
  {
    id: "topic-2",
    order: 2,
    title: "Лес Гигантских Деревьев",
    subtitle: "Условия (if / else / тернарный / switch)",
    reference: "Атака Титанов",
    currency: { id: "morale", title: "Боевой Дух" },
    npcs: [
      { id: "pixis",  name: "Пиксис", role: "main_story", description: "Комендант. Спокойный, ироничный, держит лицо при любой жопе." },
      { id: "eren",   name: "Эрен",   role: "side",       description: "Молодой солдат Корпуса Разведки, рвётся в бой." },
      { id: "asami",  name: "Асами",  role: "side",       description: "Местная жительница, носит характерный шарф." },
      { id: "sasha",  name: "Саша",   role: "side",       description: "Эпизодический NPC, любит еду." },
      { id: "arni",   name: "Арни",   role: "side",       description: "Аналитик / книжный червь." }
    ],
    storyPage: {
      id: "t2-story-intro",
      kind: "story",
      title: "У Стен",
      blocks: [
        { type: "title", content: "Лес Гигантских Деревьев" },
        { type: "text", content: "Старейшина рассказывал про южные Стены — лес там пробудил тварей, Корпус Разведки несёт потери." },
        { type: "text", content: "# выходит к стенам на рассвете. Дым, ругань командиров, раненые на телегах. На самой высокой точке стоит человек с фляжкой — комендант Пиксис." },
        { type: "text", content: "Пиксис не удивляется. «Ты вовремя. У нас падает боевой дух — а без него стены не удержим. Собери восемь единиц. Я подскажу, где.»" }
      ]
    },
    theoryPages: [
      {
        id: "t2-l1-if",
        kind: "theory",
        title: "Простой if",
        blocks: [
          { type: "title", content: "Условие if" },
          { type: "text", content: "if выполняет блок кода только если условие истинно (true)." },
          { type: "code", content: `bool dangerSpotted = true;\n\nif (dangerSpotted)\n{\n    Console.WriteLine("Поднять флаг!");\n}` },
          { type: "text", content: "В скобках — условие. В фигурных скобках — что делать, если оно истинно." }
        ]
      },
      {
        id: "t2-l2-compare",
        kind: "theory",
        title: "Операторы сравнения",
        blocks: [
          { type: "title", content: "Сравнение" },
          { type: "text", content: "Операторы сравнения возвращают bool." },
          { type: "code", content: `int a = 5;\nint b = 10;\n\nbool less   = a < b;   // true\nbool more   = a > b;   // false\nbool equal  = a == b;  // false\nbool notEq  = a != b;  // true` },
          { type: "text", content: "Запомни: == — это сравнение. = — это присваивание. Это разные вещи." }
        ]
      },
      {
        id: "t2-l3-if-else",
        kind: "theory",
        title: "if / else",
        blocks: [
          { type: "title", content: "Альтернативная ветка" },
          { type: "text", content: "else выполняется, если условие if оказалось false." },
          { type: "code", content: `bool haveRedThread = false;\n\nif (haveRedThread)\n{\n    Console.WriteLine("Использую её");\n}\nelse\n{\n    Console.WriteLine("Ищу другую");\n}` }
        ]
      },
      {
        id: "t2-l4-else-if",
        kind: "theory",
        title: "else if (цепочка)",
        blocks: [
          { type: "title", content: "Несколько веток" },
          { type: "text", content: "Если веток больше двух — используй цепочку." },
          { type: "code", content: `int hour = 14;\n\nif (hour < 12)\n{\n    Console.WriteLine("Утро");\n}\nelse if (hour < 18)\n{\n    Console.WriteLine("День");\n}\nelse\n{\n    Console.WriteLine("Вечер");\n}` },
          { type: "text", content: "Сработает только первая подходящая ветка. Остальные пропустятся." }
        ]
      },
      {
        id: "t2-l5-ternary",
        kind: "theory",
        title: "Тернарный оператор",
        blocks: [
          { type: "title", content: "Тернарный оператор" },
          { type: "text", content: "Краткая форма if/else, когда нужно просто выбрать одно из двух значений." },
          { type: "code", content: `int age = 20;\nstring kind = age >= 18 ? "Взрослый" : "Ребёнок";\nConsole.WriteLine(kind);` },
          { type: "text", content: "Синтаксис: условие ? значение_если_true : значение_если_false" }
        ]
      },
      {
        id: "t2-l6-switch",
        kind: "theory",
        title: "switch",
        blocks: [
          { type: "title", content: "switch / case" },
          { type: "text", content: "Когда нужно сравнить одну переменную с множеством конкретных значений — switch удобнее цепочки if/else." },
          { type: "code", content: `string signal = "красная";\n\nswitch (signal)\n{\n    case "зелёная":\n        Console.WriteLine("Безопасно");\n        break;\n    case "жёлтая":\n        Console.WriteLine("Приближается обычный");\n        break;\n    case "красная":\n        Console.WriteLine("Аномальный!");\n        break;\n    default:\n        Console.WriteLine("Неизвестный сигнал");\n        break;\n}` },
          { type: "text", content: "break обязателен после каждого case — иначе провалится в следующий." }
        ]
      }
    ],
    tasks: [
      {
        id: "t2-task-1", role: "story", type: "fill-in-blank", status: "final",
        title: "Пиксис: тревога на стене",
        theoryPageId: "t2-l1-if", npcId: "pixis",
        npcText: "«Дозорный заметил движение в лесу. Если опасность — поднять флаг. Допиши.»",
        codeTemplate: `bool dangerSpotted = true;\n\n___ (dangerSpotted)\n{\n    Console.WriteLine("Поднять флаг!");\n}`,
        blank: "if", correctAnswer: "if",
        rewardXp: 10, rewardCurrency: 1
      },
      {
        id: "t2-task-2", role: "story", type: "fill-in-blank", status: "final",
        title: "Пиксис: кого первым в укрытие",
        theoryPageId: "t2-l2-compare", npcId: "pixis",
        npcText: "«Двух надо эвакуировать. Младший — первым.»",
        codeTemplate: `int ageA = 14;\nint ageB = 22;\nif (ageA ___ ageB)\n{\n    Console.WriteLine("A идёт в укрытие первым");\n}`,
        blank: "<", correctAnswer: "<",
        rewardXp: 15, rewardCurrency: 1
      },
      {
        id: "t2-task-3", role: "story", type: "single-choice", status: "draft",
        title: "Подсчёт раненых",
        theoryPageId: "t2-l2-compare", npcId: "pixis",
        npcText: "«Если раненых больше пяти — посылаем второй обоз. Какое условие сработает правильно?»",
        question: "Какое условие отправит второй обоз, если раненых больше пяти?",
        options: ["wounded > 5", "wounded < 5", "wounded = 5", "wounded == 5"],
        correctIndex: 0,
        rewardXp: 10, rewardCurrency: 1
      },
      {
        id: "t2-task-4", role: "story", type: "code-order", status: "final",
        title: "Асами: чинит шарф",
        theoryPageId: "t2-l3-if-else", npcId: "asami",
        npcText: "«Порвался шарф. Если есть красная нить — беру её, иначе ищу другую. Помоги собрать код в правильном порядке.»",
        description: "Расставь строки так, чтобы Асами выбрала нить корректно.",
        lines: [
          `bool haveRedThread = true;`,
          `string action;`,
          `if (haveRedThread)`,
          `{`,
          `    action = "Использую её";`,
          `}`,
          `else`,
          `{`,
          `    action = "Ищу другую";`,
          `}`,
          `Console.WriteLine(action);`
        ],
        correctOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        rewardXp: 20, rewardCurrency: 1
      },
      {
        id: "t2-task-5", role: "story", type: "fill-in-blank", status: "draft",
        title: "Эрен: вылазка или ждать",
        theoryPageId: "t2-l5-ternary", npcId: "eren",
        npcText: "Эрен горячится: «Если разведка вернулась — идём, иначе ждём. Один оператор — и поехали.»",
        codeTemplate: `bool scoutBack = true;\nstring order = scoutBack ___ "Вылазка" : "Ждать";\nConsole.WriteLine(order);`,
        blank: "?", correctAnswer: "?",
        rewardXp: 15, rewardCurrency: 1
      },
      {
        id: "t2-task-6", role: "story", type: "single-choice", status: "draft",
        title: "Арни: книга про мир за лесом",
        theoryPageId: "t2-l4-else-if", npcId: "arni",
        npcText: "Арни шепчет: «Я нашёл книгу. Если она про море — отдать в библиотеку, если про другой материк — спрятать, иначе — оставить мне. Какое сравнение тут не пройдёт?»",
        question: "Какое из выражений вернёт ошибку компиляции в условии else if?",
        options: [
          `topic == "море"`,
          `topic = "море"`,
          `topic != "море"`,
          `topic.Length > 0`
        ],
        correctIndex: 1,
        explanation: "В условии нужно сравнение (==), а не присваивание (=).",
        rewardXp: 15, rewardCurrency: 1
      },
      {
        id: "t2-task-7", role: "story", type: "match-pairs", status: "draft",
        title: "Пиксис: распознай сигнал",
        theoryPageId: "t2-l6-switch", npcId: "pixis",
        npcText: "«Каждая ракета — свой приказ. Сопоставь.»",
        pairs: [
          { left: "зелёная",   right: "Возвращаемся домой"          },
          { left: "жёлтая",    right: "Замечен обычный, готовиться" },
          { left: "красная",   right: "Аномальный — всем в позиции" },
          { left: "чёрная",    right: "Командование, срочный сбор"  }
        ],
        rewardXp: 20, rewardCurrency: 1
      },
      {
        id: "t2-task-8", role: "story", type: "code-order", status: "draft",
        title: "Сигнальные ракеты — switch",
        theoryPageId: "t2-l6-switch", npcId: "eren",
        npcText: "«Дай мне корректный switch, по сигналу буду действовать.»",
        description: "Расставь строки, чтобы получился корректный switch с break-ами.",
        lines: [
          `string signal = "красная";`,
          `switch (signal)`,
          `{`,
          `    case "зелёная":`,
          `        Console.WriteLine("Безопасно");`,
          `        break;`,
          `    case "красная":`,
          `        Console.WriteLine("Аномальный!");`,
          `        break;`,
          `    default:`,
          `        Console.WriteLine("Неизвестный сигнал");`,
          `        break;`,
          `}`
        ],
        correctOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        rewardXp: 20, rewardCurrency: 1
      },
      {
        id: "t2-task-final", role: "story", type: "find-the-bug", status: "draft",
        title: "Саша делит еду",
        theoryPageId: "t2-l4-else-if", npcId: "sasha",
        npcText: "«Я делю провизию по званиям. Но что-то одна ветка съедает чужой паёк — найди.»",
        lines: [
          `string rank = "scout";`,
          `if (rank == "captain")`,
          `{`,
          `    Console.WriteLine("Большой паёк");`,
          `}`,
          `else if (rank == "scout")`,
          `{`,
          `    Console.WriteLine("Средний паёк");`,
          `}`,
          `else if (rank == "scout")`,
          `{`,
          `    Console.WriteLine("Двойной паёк");`,
          `}`,
          `else`,
          `{`,
          `    Console.WriteLine("Стандартный паёк");`,
          `}`
        ],
        bugLineIndex: 9,
        explanation: "Вторая ветка else if проверяет то же условие, что и первая ветка else if — она никогда не сработает (или маскирует логическую ошибку при копипасте). Должно быть либо другое звание, либо ветка лишняя.",
        rewardXp: 25, rewardCurrency: 1
      }
    ],
    finalAction: {
      id: "t2-inspire-corps",
      title: "Вдохновить корпус",
      cost: 6,
      cutsceneBlocks: [
        { type: "title", content: "Вдохновить корпус" },
        { type: "text", content: "# обходит позиции одну за другой. Раздаёт собранное — флаги, перевязки, тёплый хлеб от Саши. Просто стоит рядом, ничего не говорит." },
        { type: "text", content: "К рассвету корпус строится перед последней атакой. Пиксис вытаскивает фляжку и кивает #: «Дальше — наше.»" },
        { type: "text", content: "Сама битва впереди — её мы оставим на потом, когда сможем писать код задачи целиком." }
      ]
    }
  },

  // ===========================================================================
  // ТЕМА 3 — ГОРОД МЕНЕСТРЕЛЕЙ (Циклы). Отсылка: Король и Шут.
  // ===========================================================================
  {
    id: "topic-3",
    order: 3,
    title: "Город Менестрелей",
    subtitle: "Циклы (while, for, do-while, break, continue, бесконечные циклы)",
    reference: "Король и Шут",
    currency: { id: "notes", title: "Ноты" },
    npcs: [
      { id: "drummer",   name: "Барабанщик", role: "main_story", description: "Бьёт в барабан бесконечно, не может остановиться сам." },
      { id: "singer",    name: "Певица",     role: "main_story", description: "Поёт один и тот же куплет, пока есть силы." },
      { id: "violinist", name: "Скрипач",    role: "main_story", description: "Каждый аккорд фальшивый, застрял на одной ноте." },
      { id: "dancer",    name: "Танцор",     role: "main_story", description: "Крутится в пируэте, не может встать в финальную позу." },
      { id: "jester",    name: "Шут",        role: "main_side",  description: "Бродит по городу, даёт сайдовые задания." }
    ],
    storyPage: {
      id: "t3-story-intro",
      kind: "story",
      title: "Бесконечная баллада",
      blocks: [
        { type: "title", content: "Город Менестрелей" },
        { type: "text", content: "После Стен до # доходит слух: где-то на западе песни не заканчиваются. Никогда. Городу нужна помощь." },
        { type: "text", content: "# заходит за ворота — и слышит. Барабан бьёт без перерыва. Певица тянет один и тот же куплет. Скрипач застрял на одной ноте. Танцор кружится посреди площади." },
        { type: "text", content: "На городе проклятие — Бесконечная Баллада. У музыки нет условия выхода. Чтобы освободить город, # должен вытащить каждого музыканта из его петли и сыграть финальный «забытый» куплет на колокольне." }
      ]
    },
    theoryPages: [
      {
        id: "t3-l1-while",
        kind: "theory",
        title: "while",
        blocks: [
          { type: "title", content: "Цикл while" },
          { type: "text", content: "while выполняется пока условие истинно. Удобен, когда количество итераций заранее неизвестно." },
          { type: "code", content: `int energy = 3;\n\nwhile (energy > 0)\n{\n    Console.WriteLine("Куплет");\n    energy--;\n}` },
          { type: "text", content: "Если забыть менять переменную внутри — цикл будет бесконечным." }
        ]
      },
      {
        id: "t3-l2-for",
        kind: "theory",
        title: "for",
        blocks: [
          { type: "title", content: "Цикл for" },
          { type: "text", content: "Удобен, когда заранее знаешь, сколько раз нужно повторить." },
          { type: "code", content: `for (int i = 0; i < 5; i++)\n{\n    Console.WriteLine("Куплет " + i);\n}` },
          { type: "text", content: "Три блока: инициализация, условие, шаг." }
        ]
      },
      {
        id: "t3-l3-do-while",
        kind: "theory",
        title: "do-while",
        blocks: [
          { type: "title", content: "do-while" },
          { type: "text", content: "Тело цикла выполняется хотя бы один раз — даже если условие сразу false." },
          { type: "code", content: `int audience = 0;\n\ndo\n{\n    Console.WriteLine("Припев");\n}\nwhile (audience > 0);` },
          { type: "text", content: "Сравни с обычным while: там тело могло бы не выполниться ни разу." }
        ]
      },
      {
        id: "t3-l4-break",
        kind: "theory",
        title: "break",
        blocks: [
          { type: "title", content: "break" },
          { type: "text", content: "break прерывает цикл полностью." },
          { type: "code", content: `for (int i = 0; i < 10; i++)\n{\n    if (i == 5) break;\n    Console.WriteLine(i);\n}\n// Выведет 0,1,2,3,4` }
        ]
      },
      {
        id: "t3-l5-continue",
        kind: "theory",
        title: "continue",
        blocks: [
          { type: "title", content: "continue" },
          { type: "text", content: "continue пропускает текущую итерацию и идёт к следующей." },
          { type: "code", content: `for (int i = 0; i < 5; i++)\n{\n    if (i == 2) continue;\n    Console.WriteLine(i);\n}\n// Выведет 0,1,3,4` }
        ]
      },
      {
        id: "t3-l6-infinite",
        kind: "theory",
        title: "Бесконечные циклы",
        blocks: [
          { type: "title", content: "while (true)" },
          { type: "text", content: "Иногда нужен цикл, который работает «всегда» — например, главный игровой цикл. Используют while (true) с выходом через break внутри." },
          { type: "code", content: `while (true)\n{\n    string input = Console.ReadLine();\n    if (input == "стоп") break;\n    Console.WriteLine("Команда: " + input);\n}` },
          { type: "text", content: "Без break это будет настоящий бесконечный цикл — программа зависнет." }
        ]
      }
    ],
    tasks: [
      {
        id: "t3-task-1", role: "story", type: "single-choice", status: "draft",
        title: "Барабанщик: что такое while",
        theoryPageId: "t3-l1-while", npcId: "drummer",
        npcText: "Барабан бьёт без остановки. «Бью, пока есть силы… а что это вообще такое?»",
        question: "Что делает цикл while?",
        options: [
          "выполняет тело один раз",
          "выполняет тело, пока условие истинно",
          "выполняет тело заданное число раз",
          "никогда не выполняет тело"
        ],
        correctIndex: 1,
        rewardXp: 10, rewardCurrency: 1
      },
      {
        id: "t3-task-2", role: "story", type: "find-the-bug", status: "draft",
        title: "Барабанщик: бесконечная баллада",
        theoryPageId: "t3-l6-infinite", npcId: "drummer",
        npcText: "«Цикл не отпускает! Сделай так, чтобы он мог закончиться.»",
        lines: [
          "while (true)",
          "{",
          `    Console.WriteLine("Удар!");`,
          "}"
        ],
        bugLineIndex: 0,
        explanation: "Цикл while (true) без break внутри — бесконечный. Должна быть проверка на условие выхода (например, if (drumsLeft == 0) break).",
        rewardXp: 20, rewardCurrency: 1
      },
      {
        id: "t3-task-3", role: "story", type: "fill-in-blank", status: "draft",
        title: "Певица: спеть ровно N куплетов",
        theoryPageId: "t3-l2-for", npcId: "singer",
        npcText: "«Мне сказали — ровно пять куплетов. Допиши условие.»",
        codeTemplate: `for (int i = 0; i ___ 5; i++)\n{\n    Console.WriteLine("Куплет " + i);\n}`,
        blank: "<", correctAnswer: "<",
        rewardXp: 15, rewardCurrency: 1
      },
      {
        id: "t3-task-4", role: "story", type: "code-order", status: "draft",
        title: "Певица: пока есть силы",
        theoryPageId: "t3-l1-while", npcId: "singer",
        npcText: "«Петь, пока энергия не кончится. Собери код.»",
        description: "Расставь строки в правильном порядке — цикл while с уменьшением энергии.",
        lines: [
          "int energy = 3;",
          "while (energy > 0)",
          "{",
          `    Console.WriteLine("Куплет");`,
          "    energy--;",
          "}"
        ],
        correctOrder: [0, 1, 2, 3, 4, 5],
        rewardXp: 20, rewardCurrency: 1
      },
      {
        id: "t3-task-5", role: "story", type: "fill-in-blank", status: "draft",
        title: "Скрипач: пропустить фальшь",
        theoryPageId: "t3-l5-continue", npcId: "violinist",
        npcText: "«Третий аккорд фальшивый. Пропусти его — продолжай.»",
        codeTemplate: `for (int i = 0; i < 5; i++)\n{\n    if (i == 2) ___;\n    Console.WriteLine("Аккорд " + i);\n}`,
        blank: "continue", correctAnswer: "continue",
        rewardXp: 15, rewardCurrency: 1
      },
      {
        id: "t3-task-6", role: "story", type: "single-choice", status: "draft",
        title: "Скрипач: что делает break",
        theoryPageId: "t3-l4-break", npcId: "violinist",
        npcText: "«Струна лопнула. Дальше играть нельзя. Что делает break?»",
        question: "Что делает оператор break внутри цикла?",
        options: [
          "пропускает одну итерацию и идёт дальше",
          "полностью прерывает цикл",
          "перезапускает цикл сначала",
          "выводит сообщение об ошибке"
        ],
        correctIndex: 1,
        rewardXp: 10, rewardCurrency: 1
      },
      {
        id: "t3-task-7", role: "story", type: "match-pairs", status: "draft",
        title: "Танцор: while vs do-while",
        theoryPageId: "t3-l3-do-while", npcId: "dancer",
        npcText: "«Один пируэт сделать надо точно — даже если в зале пусто. Сопоставь, что про что.»",
        pairs: [
          { left: "while",    right: "Может не выполниться ни разу"   },
          { left: "do-while", right: "Выполняется хотя бы один раз"   },
          { left: "for",      right: "Когда знаешь число повторений"   },
          { left: "while (true)", right: "Когда выход — только через break" }
        ],
        rewardXp: 20, rewardCurrency: 1
      },
      {
        id: "t3-task-8", role: "story", type: "code-order", status: "draft",
        title: "Танцор: финальная поза",
        theoryPageId: "t3-l4-break", npcId: "dancer",
        npcText: "«Прыгаю до сигнала — потом замираю. Собери код с break-ом.»",
        description: "Расставь строки — цикл прыжков, прерываемый break по сигналу.",
        lines: [
          "for (int i = 0; i < 100; i++)",
          "{",
          "    if (signal)",
          "    {",
          "        break;",
          "    }",
          `    Console.WriteLine("Прыжок " + i);`,
          "}",
          `Console.WriteLine("Финальная поза");`
        ],
        correctOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        rewardXp: 20, rewardCurrency: 1
      },
      {
        id: "t3-side-1", role: "side", type: "code-order", status: "idea",
        title: "Шут: жонглировать, пока публика",
        theoryPageId: "t3-l1-while", npcId: "jester",
        npcText: "«Жонглирую, пока публика не разошлась. Собери цикл.»",
        description: "Цикл while с условием на размер аудитории.",
        lines: [
          "int audience = 10;",
          "while (audience > 0)",
          "{",
          `    Console.WriteLine("Кубик в воздух!");`,
          "    audience--;",
          "}"
        ],
        correctOrder: [0, 1, 2, 3, 4, 5],
        rewardXp: 15, rewardCurrency: 0
      },
      {
        id: "t3-side-2", role: "side", type: "fill-in-blank", status: "idea",
        title: "Шут: ровно N кувырков",
        theoryPageId: "t3-l2-for", npcId: "jester",
        npcText: "«Семь кувырков. Не больше, не меньше. Допиши условие.»",
        codeTemplate: `for (int i = 0; ___; i++)\n{\n    Console.WriteLine("Кувырок " + i);\n}`,
        blank: "i < 7", correctAnswer: "i < 7",
        rewardXp: 15, rewardCurrency: 0
      },
      {
        id: "t3-side-3", role: "side", type: "match-pairs", status: "idea",
        title: "Шут: шутка хотя бы раз",
        theoryPageId: "t3-l3-do-while", npcId: "jester",
        npcText: "«Шутка должна прозвучать хотя бы раз — даже если все спят. Какой цикл подходит?»",
        pairs: [
          { left: "while",    right: "Может пропустить тело"                  },
          { left: "do-while", right: "Тело гарантированно выполнится один раз" }
        ],
        rewardXp: 15, rewardCurrency: 0
      },
      {
        id: "t3-side-4", role: "side", type: "fill-in-blank", status: "idea",
        title: "Шут: гнилые помидоры",
        theoryPageId: "t3-l4-break", npcId: "jester",
        npcText: "«Если полетели помидоры — заканчиваю шоу. Вставь правильное слово.»",
        codeTemplate: `for (int i = 0; i < 10; i++)\n{\n    if (tomatoesFlying) ___;\n    Console.WriteLine("Номер " + i);\n}`,
        blank: "break", correctAnswer: "break",
        rewardXp: 15, rewardCurrency: 0
      },
      {
        id: "t3-side-5", role: "side", type: "find-the-bug", status: "idea",
        title: "Шут: панчлайны вылезли не туда",
        theoryPageId: "t3-l5-continue", npcId: "jester",
        npcText: "«Хорошие шутки печатает, плохие — тоже печатает. Почему?»",
        lines: [
          "for (int i = 0; i < jokes.Length; i++)",
          "{",
          `    Console.WriteLine(jokes[i]);`,
          "    if (isBad[i]) continue;",
          "}"
        ],
        bugLineIndex: 2,
        explanation: "continue стоит после Console.WriteLine — плохая шутка уже выведена. continue нужно поставить ДО вывода.",
        rewardXp: 20, rewardCurrency: 0
      },
      {
        id: "t3-side-6", role: "side", type: "single-choice", status: "idea",
        title: "Шут: какой цикл не закончится",
        theoryPageId: "t3-l6-infinite", npcId: "jester",
        npcText: "«Из этих четырёх — один играет вечно. Какой?»",
        question: "Какой из циклов никогда не завершится?",
        options: [
          "for (int i = 0; i < 5; i++) { ... }",
          "while (false) { ... }",
          "while (true) { /* без break */ }",
          "do { ... } while (count < 3);"
        ],
        correctIndex: 2,
        rewardXp: 10, rewardCurrency: 0
      }
    ],
    finalAction: {
      id: "t3-final-verse",
      title: "Сыграть финальный куплет",
      cost: 6,
      cutsceneBlocks: [
        { type: "title", content: "Финальный куплет" },
        { type: "text", content: "# поднимается на колокольню. Шесть собранных нот ложатся на каменный край — каждая помнит свою петлю." },
        { type: "text", content: "Тот самый «забытый» куплет идёт сам. Барабан замолкает. Скрипка отпускает ноту. Танцор замирает." },
        { type: "text", content: "Город дышит впервые за много месяцев. Один из музыкантов подходит и говорит #: «На восточной дороге — алхимики. Там тоже неладно.»" }
      ]
    }
  },

  // ===========================================================================
  // ТЕМА 4 — ГОРОД АЛХИМИКОВ (Методы + рекурсия). Отсылка: Breaking Bad.
  // ===========================================================================
  {
    id: "topic-4",
    order: 4,
    title: "Город Алхимиков",
    subtitle: "Методы (void, параметры, return, композиция, рекурсия)",
    reference: "Breaking Bad",
    currency: { id: "reagents", title: "Реагенты" },
    npcs: [
      { id: "voyd",   name: "Мистер Уойд",        role: "main_story", description: "Талантливый алхимик. Прототип Уолтера Уайта. Имя — отсылка на void." },
      { id: "john",   name: "Джон",               role: "story_side", description: "Молодой помощник Уойда. Раздолбай, прототип Джесси." },
      { id: "gust",   name: "Густ",               role: "antagonist", description: "Монополист города. Лично с # не пересекается до катсцены." },
      { id: "guard",  name: "Начальник охраны",   role: "side",       description: "Молчаливый, опытный. Прототип Майка." },
      { id: "herbalist", name: "Травник",         role: "side",       description: "Торговец сухими травами на рынке." },
      { id: "mentor", name: "Старый алхимик",     role: "side",       description: "Бывший учитель Уойда. Передаёт пару своих рецептов." },
      { id: "lawyer", name: "Городской адвокат",  role: "side",       description: "Тёмная личность, продаёт алиби. Прототип Сола." }
    ],
    storyPage: {
      id: "t4-story-intro",
      kind: "story",
      title: "Восточная дорога",
      blocks: [
        { type: "title", content: "Город Алхимиков" },
        { type: "text", content: "Один из расколдованных музыкантов сказал #: «На восточной дороге слышно про алхимиков. Там тоже неладно.»" },
        { type: "text", content: "В городе — открытые лавки, запах трав и кислот, шумный рынок. Алхимия легальна. Но есть один «но»: всё это под Густом — монополистом, который заставляет варить наркотическое зелье." },
        { type: "text", content: "На отшибе сидит человек, который отказался. Мистер Уойд. У него есть план: собрать взрывчатку, снести штаб Густа и открыть ворота на восток. # — последний, кто ему нужен." }
      ]
    },
    theoryPages: [
      {
        id: "t4-l1-void",
        kind: "theory",
        title: "Что такое метод",
        blocks: [
          { type: "title", content: "Метод" },
          { type: "text", content: "Метод — именованный кусок кода, который можно вызвать. Уойд называет это «рецептом»." },
          { type: "code", content: `void Greet()\n{\n    Console.WriteLine("Привет!");\n}\n\nGreet(); // вызов\nGreet(); // ещё раз` },
          { type: "text", content: "void — метод ничего не возвращает. Просто делает." }
        ]
      },
      {
        id: "t4-l2-param",
        kind: "theory",
        title: "Параметр метода",
        blocks: [
          { type: "title", content: "Один параметр" },
          { type: "text", content: "Параметр — ингредиент рецепта. Передаётся при вызове." },
          { type: "code", content: `void Greet(string name)\n{\n    Console.WriteLine("Привет, " + name);\n}\n\nGreet("Уойд");\nGreet("Джон");` }
        ]
      },
      {
        id: "t4-l3-params",
        kind: "theory",
        title: "Несколько параметров",
        blocks: [
          { type: "title", content: "Много параметров" },
          { type: "text", content: "У метода может быть сколько угодно параметров. Порядок при вызове должен совпадать." },
          { type: "code", content: `void Mix(string a, string b)\n{\n    Console.WriteLine("Смешиваю " + a + " и " + b);\n}\n\nMix("кислота", "соль");` }
        ]
      },
      {
        id: "t4-l4-return",
        kind: "theory",
        title: "return",
        blocks: [
          { type: "title", content: "Возврат значения" },
          { type: "text", content: "Если метод что-то возвращает — вместо void пишем тип возврата, и используем return." },
          { type: "code", content: `int Add(int a, int b)\n{\n    return a + b;\n}\n\nint result = Add(3, 5); // 8` },
          { type: "text", content: "После return метод заканчивает работу. Всё, что ниже — не выполнится." }
        ]
      },
      {
        id: "t4-l5-compose",
        kind: "theory",
        title: "Метод из метода",
        blocks: [
          { type: "title", content: "Композиция" },
          { type: "text", content: "Один метод может вызывать другой. Так из маленьких рецептов собирают большие." },
          { type: "code", content: `string MakeAcid()    { return "кислота"; }\nstring MakeOxidizer() { return "окислитель"; }\n\nstring MakeBomb()\n{\n    string a = MakeAcid();\n    string b = MakeOxidizer();\n    return a + " + " + b;\n}` }
        ]
      },
      {
        id: "t4-l6-recursion",
        kind: "theory",
        title: "Рекурсия",
        blocks: [
          { type: "title", content: "Рекурсия" },
          { type: "text", content: "Метод может вызывать сам себя. Это рекурсия. Обязательно нужен базовый случай — иначе бесконечный вызов." },
          { type: "code", content: `int Countdown(int n)\n{\n    if (n == 0) return 0;        // базовый случай\n    Console.WriteLine(n);\n    return Countdown(n - 1);     // рекурсия\n}` },
          { type: "text", content: "Без if (n == 0) return 0 — программа упадёт со StackOverflow." }
        ]
      }
    ],
    tasks: [
      {
        id: "t4-task-1", role: "story", type: "single-choice", status: "draft",
        title: "Знакомство с Уойдом",
        theoryPageId: "t4-l1-void", npcId: "voyd",
        npcText: "Уойд кладёт на стол маленькую горсть сухого порошка. «Сначала проверим. Что такое метод?»",
        question: "Что такое метод в C#?",
        options: [
          "команда вывода в консоль",
          "именованный кусок кода, который можно вызвать",
          "название переменной",
          "тип данных"
        ],
        correctIndex: 1,
        reagent: "Сухой порошок",
        rewardXp: 10, rewardCurrency: 1
      },
      {
        id: "t4-task-2", role: "story", type: "find-the-bug", status: "draft",
        title: "Бочка-мем",
        theoryPageId: "t4-l2-param", npcId: "john",
        npcText: "Джон тянет за верёвку. «Тащу бочку!» Уойд из угла: «Джон. У бочки есть колёса.»",
        lines: [
          "void DragBarrel(int distance)",
          "{",
          `    Console.WriteLine("Тащу бочку на " + distance);`,
          "}",
          "",
          "DragBarrel(50);"
        ],
        bugLineIndex: 5,
        explanation: "Бочку нужно катить, а не тащить. Должен быть вызов RollBarrel(50) — соответствующего метода (или сам метод нужно переименовать).",
        fixedLine: "RollBarrel(50);",
        reagent: "Жидкий концентрат",
        rewardXp: 25, rewardCurrency: 1
      },
      {
        id: "t4-task-3", role: "story", type: "match-pairs", status: "draft",
        title: "Уойд: рецепты и ингредиенты",
        theoryPageId: "t4-l3-params", npcId: "voyd",
        npcText: "«Каждому рецепту — свой набор. Сопоставь.»",
        pairs: [
          { left: "Brew(water, herb)",      right: "(жидкость, ингредиент)"        },
          { left: "Mix(reagent1, reagent2)", right: "(два реагента)"               },
          { left: "Refine(crude, level)",   right: "(сырьё, уровень очистки)"      },
          { left: "Bind(base, modifier)",   right: "(основа, модификатор)"          }
        ],
        reagent: "Кислотный раствор",
        rewardXp: 20, rewardCurrency: 1
      },
      {
        id: "t4-task-4", role: "story", type: "single-choice", status: "draft",
        title: "I am the danger",
        theoryPageId: "t4-l4-return", npcId: "voyd",
        npcText: "Джон тихо: «Тебе не страшно идти против Густа?» Уойд показывает #: «Что вернёт этот метод?»",
        question: `Что вернёт метод? \n\nstring WhoIsTheDanger()\n{\n    return "я";\n}`,
        options: [`"Густ"`, `"опасность"`, `"я"`, `null`],
        correctIndex: 2,
        explanation: "return возвращает ровно то, что после него написано. В коде написано \"я\".",
        reagent: "Катализатор",
        rewardXp: 15, rewardCurrency: 1
      },
      {
        id: "t4-task-5", role: "story", type: "code-order", status: "draft",
        title: "Сборка взрывчатки",
        theoryPageId: "t4-l5-compose", npcId: "voyd",
        npcText: "«Соберём её по частям. Сначала кислота, потом окислитель, потом смесь.»",
        description: "Расставь строки внутри метода MakeBomb так, чтобы он сначала получил кислоту, потом окислитель, и вывел готовую смесь.",
        lines: [
          "string acid = MakeAcid();",
          "string oxidizer = MakeOxidizer();",
          `string bomb = acid + " + " + oxidizer;`,
          `Console.WriteLine("Готова смесь: " + bomb);`
        ],
        correctOrder: [0, 1, 2, 3],
        reagent: "Запал",
        rewardXp: 20, rewardCurrency: 1
      },
      {
        id: "t4-task-6", role: "story", type: "find-the-bug", status: "draft",
        title: "Финальная очистка",
        theoryPageId: "t4-l6-recursion", npcId: "voyd",
        npcText: "«Последний рецепт. Проверь — он зовёт сам себя.» Уойд протягивает листок.",
        lines: [
          "double Purify(double impurity)",
          "{",
          "    return Purify(impurity / 2);",
          "}"
        ],
        bugLineIndex: 2,
        explanation: "Нет базового случая. Метод вызывает сам себя без условия выхода — бесконечная рекурсия. Должно быть: if (impurity < 0.01) return impurity; перед рекурсивным вызовом.",
        fixedLine: "    if (impurity < 0.01) return impurity;\n    return Purify(impurity / 2);",
        reagent: "Финальная стабильная смесь",
        rewardXp: 30, rewardCurrency: 1
      },
      {
        id: "t4-side-1", role: "side", type: "single-choice", status: "idea",
        title: "Охранник на проходе",
        theoryPageId: "t4-l4-return", npcId: "guard",
        npcText: "Молчаливый человек у ворот. «Какой тип возврата у метода CheckPass(name), чтобы он либо пускал, либо нет?»",
        question: "Что должен возвращать метод CheckPass, если ответ — да/нет?",
        options: ["void", "string", "bool", "int"],
        correctIndex: 2,
        rewardXp: 10, rewardCurrency: 0
      },
      {
        id: "t4-side-2", role: "side", type: "fill-in-blank", status: "idea",
        title: "Травник: цена по весу",
        theoryPageId: "t4-l3-params", npcId: "herbalist",
        npcText: "«Дам сухой травы. Вызови GetPrice — реагент и количество.»",
        codeTemplate: `int price = GetPrice("сушёный лист", ___);`,
        blank: "5", correctAnswer: "5",
        rewardXp: 10, rewardCurrency: 0
      },
      {
        id: "t4-side-3", role: "side", type: "code-order", status: "idea",
        title: "Джон чистит обувь",
        theoryPageId: "t4-l2-param", npcId: "john",
        npcText: "«Дорога пыльная. Помоги собрать порядок.»",
        description: "Расставь строки: объяви ботинок, вызови CleanShoe, выведи результат.",
        lines: [
          `string shoe = "Левый ботинок";`,
          `CleanShoe(shoe);`,
          `Console.WriteLine("Готово: " + shoe);`
        ],
        correctOrder: [0, 1, 2],
        rewardXp: 15, rewardCurrency: 0
      },
      {
        id: "t4-side-4", role: "side", type: "single-choice", status: "idea",
        title: "Уойд: кофе на перерыве",
        theoryPageId: "t4-l1-void", npcId: "voyd",
        npcText: "«Простой рецепт. Без ингредиентов, без возврата. Какое объявление верное?»",
        question: "Какое объявление метода правильное для MakeCoffee (без параметров, ничего не возвращает)?",
        options: [
          "void MakeCoffee() { ... }",
          "int MakeCoffee() { ... }",
          "void MakeCoffee(int x) { ... }",
          "MakeCoffee void() { ... }"
        ],
        correctIndex: 0,
        rewardXp: 10, rewardCurrency: 0
      },
      {
        id: "t4-side-5", role: "side", type: "match-pairs", status: "idea",
        title: "Старый алхимик: наследие",
        theoryPageId: "t4-l5-compose", npcId: "mentor",
        npcText: "Сгорбленный старик молча кладёт перед # пару листков. «Здесь — какой малый метод вызывается каким большим.»",
        pairs: [
          { left: "MakeBomb",     right: "вызывает MakeAcid"    },
          { left: "MakeBomb",     right: "вызывает MakeOxidizer" },
          { left: "MakeAntidote", right: "вызывает Purify"      },
          { left: "MakeAntidote", right: "вызывает Bind"        }
        ],
        rewardXp: 15, rewardCurrency: 0
      },
      {
        id: "t4-side-6", role: "side", type: "fill-in-blank", status: "idea",
        title: "Прачка: пятна",
        theoryPageId: "t4-l6-recursion", npcId: "voyd",
        npcText: "«Фартук в пятнах. Если ещё не отстиралось — стирай ещё раз.»",
        codeTemplate: `void Wash(int stain)\n{\n    if (stain == 0) return;\n    Console.WriteLine("Стираю");\n    ___(stain - 1);\n}`,
        blank: "Wash", correctAnswer: "Wash",
        rewardXp: 15, rewardCurrency: 0
      },
      {
        id: "t4-side-7", role: "side", type: "fill-in-blank", status: "idea",
        title: "Адвокат: алиби",
        theoryPageId: "t4-l4-return", npcId: "lawyer",
        npcText: "Тёмная личность улыбается. «Если стража спросит — у меня есть метод. Какой тип он возвращает?»",
        codeTemplate: `___ MakeAlibi(string situation)\n{\n    return "Я был у дяди в деревне";\n}`,
        blank: "string", correctAnswer: "string",
        rewardXp: 15, rewardCurrency: 0
      }
    ],
    finalAction: {
      id: "t4-blow-up-gust",
      title: "Взорвать штаб Густа",
      cost: 4,
      cutsceneBlocks: [
        { type: "title", content: "Взрыв" },
        { type: "text", content: "# и Уойд закладывают собранные реагенты у штаба. Уойд проверяет ещё раз — Purify, базовый случай на месте. Можно." },
        { type: "text", content: "Взрыв. Поднимается пыль, рушится фасад. Густ — больше не монополист." },
        { type: "text", content: "Уойд кивает #: «Теперь можно. Дорога на восток открыта.» Над городом проступает столица." }
      ]
    }
  },

  // ===========================================================================
  // ТЕМА 5 — СТОЛИЦА (Массивы). Атмосфера: народное сопротивление.
  // ===========================================================================
  {
    id: "topic-5",
    order: 5,
    title: "Столица",
    subtitle: "Массивы (объявление, индексы, Length, for, foreach, поиск)",
    reference: "Народное сопротивление (атмосфера, без прямых отсылок)",
    currency: { id: "rebel_zeal", title: "Революционное Рвение", deferred: true },
    npcs: [
      { id: "klaus",   name: "Клаус",    role: "main_story", description: "Молодой повстанец, верный делу C. Перехватывает # на входе." },
      { id: "greta",   name: "Грета",    role: "main_story", description: "Швея. Шьёт повязки, знает каждого в районе по имени." },
      { id: "otto",    name: "Отто",     role: "main_story", description: "Кузнец. Грубый, прямой. Куёт оружие тайком." },
      { id: "hans",    name: "Ганс",     role: "main_story", description: "Студент, молодой идеалист. Считает готовых." },
      { id: "werner",  name: "Вернер",   role: "main_story", description: "Бывший солдат армии Null, дезертировал. Прагматик." },
      { id: "helga",   name: "Хельга",   role: "main_story", description: "Хозяйка трактира. Раздаёт пайки." },
      { id: "fritz",   name: "Фриц",     role: "main_story", description: "Печатник. Любит говорить о свободе." },
      { id: "old_lady", name: "Бабка-травница", role: "side", description: "Народная мудрость, лекарства." },
      { id: "docker",  name: "Грузчик",  role: "side",       description: "Эпизодический житель в порту." },
      { id: "null",    name: "Null",     role: "antagonist", description: "Узурпатор. Лично с # не пересекается до финальной сцены." }
    ],
    storyPage: {
      id: "t5-story-intro",
      kind: "story",
      title: "Подполье",
      blocks: [
        { type: "title", content: "Столица" },
        { type: "text", content: "Ворота столицы серые, забитые, под флагами Null. # ещё не успевает выдохнуть — из тени выходит человек." },
        { type: "text", content: "«Мы знали, что ты придёшь.» Молодой, спокойный. Уводит в подвал, где горит одна свеча. Его зовут Клаус." },
        { type: "text", content: "Клаус объясняет коротко: Null захватил трон год назад. Принцесса C — у него во дворце. Он питается её жизненной силой, чтобы жить вечно. Из-за этого # был год в коме." },
        { type: "text", content: "В одиночку штурм бессмыслен. Нужен отряд. # пройдёт по столице — каждый, кого получится поднять, это ещё один в строю." }
      ]
    },
    theoryPages: [
      {
        id: "t5-l1-concept",
        kind: "theory",
        title: "Что такое массив",
        blocks: [
          { type: "title", content: "Массив" },
          { type: "text", content: "Массив — это коллекция значений одного типа под одним именем. У каждого элемента есть позиция (индекс). Нумерация с нуля." },
          { type: "code", content: `string[] rebels = { "Грета", "Отто", "Ганс", "Вернер" };` },
          { type: "text", content: "В подполье это «список имён в строю»." }
        ]
      },
      {
        id: "t5-l2-declare",
        kind: "theory",
        title: "Объявление и инициализация",
        blocks: [
          { type: "title", content: "Два способа объявить" },
          { type: "code", content: `// 1. Сразу со значениями\nstring[] rebels = { "Грета", "Отто", "Ганс" };\n\n// 2. Пустой массив фиксированного размера\nstring[] empty = new string[5];` },
          { type: "text", content: "Во втором случае все элементы по умолчанию: для строк — null, для чисел — 0." }
        ]
      },
      {
        id: "t5-l3-index",
        kind: "theory",
        title: "Доступ по индексу",
        blocks: [
          { type: "title", content: "Индекс" },
          { type: "text", content: "Чтобы получить элемент — пиши имя[индекс]. Первый элемент — индекс 0." },
          { type: "code", content: `string[] rebels = { "Грета", "Отто", "Ганс", "Вернер" };\n\nConsole.WriteLine(rebels[0]); // Грета\nConsole.WriteLine(rebels[2]); // Ганс` },
          { type: "text", content: "Выход за границу (rebels[10]) — runtime-ошибка IndexOutOfRangeException." }
        ]
      },
      {
        id: "t5-l4-length",
        kind: "theory",
        title: "Length",
        blocks: [
          { type: "title", content: "Сколько элементов" },
          { type: "text", content: "У каждого массива есть свойство Length — количество элементов." },
          { type: "code", content: `string[] rebels = { "Грета", "Отто", "Ганс" };\nConsole.WriteLine(rebels.Length); // 3` }
        ]
      },
      {
        id: "t5-l5-modify",
        kind: "theory",
        title: "Изменение элемента",
        blocks: [
          { type: "title", content: "Поменять элемент" },
          { type: "text", content: "Размер массива неизменен, но содержимое менять можно." },
          { type: "code", content: `string[] rebels = { "Грета", "Отто", "Доносчик", "Вернер" };\nrebels[2] = "[пусто]";\nConsole.WriteLine(rebels[2]); // [пусто]` }
        ]
      },
      {
        id: "t5-l6-for",
        kind: "theory",
        title: "Обход через for",
        blocks: [
          { type: "title", content: "for + индекс" },
          { type: "text", content: "Когда нужен сам индекс — используй for." },
          { type: "code", content: `string[] rebels = { "Грета", "Отто", "Ганс" };\n\nfor (int i = 0; i < rebels.Length; i++)\n{\n    Console.WriteLine(rebels[i]);\n}` },
          { type: "text", content: "Условие i < rebels.Length — не путать с <=! С <= выйдешь за границу." }
        ]
      },
      {
        id: "t5-l7-foreach",
        kind: "theory",
        title: "Обход через foreach",
        blocks: [
          { type: "title", content: "foreach" },
          { type: "text", content: "Когда индекс не нужен — foreach короче и понятнее." },
          { type: "code", content: `string[] rebels = { "Грета", "Отто", "Ганс" };\n\nforeach (string name in rebels)\n{\n    Console.WriteLine(name);\n}` },
          { type: "text", content: "В foreach нельзя изменить элемент массива через переменную цикла — для этого нужен for." }
        ]
      },
      {
        id: "t5-l8-search",
        kind: "theory",
        title: "Поиск в массиве",
        blocks: [
          { type: "title", content: "Поиск через цикл" },
          { type: "text", content: "Чтобы проверить, есть ли элемент в массиве — пробегаем циклом и сравниваем." },
          { type: "code", content: `string[] rebels = { "Грета", "Отто", "Ганс" };\nbool found = false;\n\nfor (int i = 0; i < rebels.Length; i++)\n{\n    if (rebels[i] == "Отто")\n    {\n        found = true;\n        break;\n    }\n}\n\nConsole.WriteLine(found); // True` }
        ]
      }
    ],
    tasks: [
      {
        id: "t5-task-1", role: "story", type: "single-choice", status: "draft",
        title: "Клаус: что такое массив",
        theoryPageId: "t5-l1-concept", npcId: "klaus",
        npcText: "Клаус кладёт на стол старый листок со списком имён. «Понимаешь, что это?»",
        question: "Что такое массив?",
        options: [
          "именованная коллекция значений одного типа",
          "список значений разных типов",
          "команда вывода",
          "способ объявления переменной"
        ],
        correctIndex: 0,
        rewardXp: 10, rewardCurrency: 1
      },
      {
        id: "t5-task-2", role: "story", type: "code-order", status: "draft",
        title: "Клаус: объявить отряд",
        theoryPageId: "t5-l2-declare", npcId: "klaus",
        npcText: "«Запиши четверых, кто готов прямо сейчас.»",
        description: "Расставь строки в правильном порядке.",
        lines: [
          `string[] rebels = { "Грета", "Отто", "Ганс", "Вернер" };`,
          `Console.WriteLine("Отряд собран: " + rebels.Length);`
        ],
        correctOrder: [0, 1],
        rewardXp: 15, rewardCurrency: 1
      },
      {
        id: "t5-task-3", role: "story", type: "code-order", status: "draft",
        title: "Грета: третий — доносчик",
        theoryPageId: "t5-l3-index", npcId: "greta",
        npcText: "Грета шепчет: «Третий в твоём списке — стукач. Покажи его имя.»",
        description: "Собери код, который выводит имя третьего элемента массива (через индекс 2).",
        lines: [
          `string traitor = rebels[2];`,
          `Console.WriteLine("Доносчик: " + traitor);`
        ],
        correctOrder: [0, 1],
        rewardXp: 15, rewardCurrency: 1
      },
      {
        id: "t5-task-4", role: "story", type: "fill-in-blank", status: "draft",
        title: "Отто: вычеркнуть доносчика",
        theoryPageId: "t5-l5-modify", npcId: "otto",
        npcText: "Отто молча подходит, забирает листок. «Имя — на ноль.»",
        codeTemplate: `rebels[___] = "[пусто]";`,
        blank: "2", correctAnswer: "2",
        rewardXp: 15, rewardCurrency: 1
      },
      {
        id: "t5-task-5", role: "story", type: "fill-in-blank", status: "draft",
        title: "Ганс: сколько нас осталось",
        theoryPageId: "t5-l4-length", npcId: "hans",
        npcText: "Ганс считает на пальцах. «А сколько в массиве сейчас, включая [пусто]?»",
        codeTemplate: `int count = rebels.___;\nConsole.WriteLine("В строю: " + count);`,
        blank: "Length", correctAnswer: "Length",
        rewardXp: 10, rewardCurrency: 1
      },
      {
        id: "t5-task-6", role: "story", type: "fill-in-blank", status: "draft",
        title: "Вернер: перекличка строя",
        theoryPageId: "t5-l6-for", npcId: "werner",
        npcText: "Вернер строит всех. «Поимённо — каждого.»",
        codeTemplate: `for (int i = 0; i < ___; i++)\n{\n    Console.WriteLine(rebels[i]);\n}`,
        blank: "rebels.Length", correctAnswer: "rebels.Length",
        rewardXp: 15, rewardCurrency: 1
      },
      {
        id: "t5-task-7", role: "story", type: "code-order", status: "draft",
        title: "Ганс: кто готов к бою",
        theoryPageId: "t5-l6-for", npcId: "hans",
        npcText: "«У каждого — массив readiness, true/false. Посчитай, сколько true.»",
        description: "Собери цикл for, который считает количество true в массиве readiness.",
        lines: [
          `int ready = 0;`,
          `for (int i = 0; i < readiness.Length; i++)`,
          `{`,
          `    if (readiness[i]) ready++;`,
          `}`,
          `Console.WriteLine("Готовы: " + ready);`
        ],
        correctOrder: [0, 1, 2, 3, 4, 5],
        rewardXp: 20, rewardCurrency: 1
      },
      {
        id: "t5-task-8", role: "story", type: "fill-in-blank", status: "draft",
        title: "Хельга: раздать снаряжение",
        theoryPageId: "t5-l7-foreach", npcId: "helga",
        npcText: "Хельга по очереди подходит к каждому. «Хлеб и оружие — всем. Допиши.»",
        codeTemplate: `foreach (string rebel in ___)\n{\n    Equip(rebel);\n    GiveBread(rebel);\n}`,
        blank: "rebels", correctAnswer: "rebels",
        rewardXp: 20, rewardCurrency: 1
      },
      {
        id: "t5-task-9", role: "story", type: "single-choice", status: "draft",
        title: "Фриц: список схваченных",
        theoryPageId: "t5-l8-search", npcId: "fritz",
        npcText: "Фриц приносит листок. «Список задержанных. Если там есть кто-то из верхушки — нас сдают.»",
        question: "Какой из вариантов корректно проверяет, есть ли имя \"Клаус\" в массиве captured?",
        options: [
          `bool found = false;\nfor (int i = 0; i < captured.Length; i++) {\n    if (captured[i] == "Клаус") { found = true; break; }\n}`,
          `bool found = captured == "Клаус";`,
          `bool found = captured.Length == "Клаус";`,
          `bool found = "Клаус" in captured;`
        ],
        correctIndex: 0,
        rewardXp: 20, rewardCurrency: 1
      },
      {
        id: "t5-task-10", role: "story", type: "find-the-bug", status: "draft",
        title: "Клаус: финальная сверка",
        theoryPageId: "t5-l8-search", npcId: "klaus",
        npcText: "«Перед штурмом — проверь последний раз. Тут где-то выходит за край.»",
        lines: [
          "for (int i = 0; i <= rebels.Length; i++)",
          "{",
          `    Console.WriteLine("В строю: " + rebels[i]);`,
          "}"
        ],
        bugLineIndex: 0,
        explanation: "Условие i <= rebels.Length должно быть i < rebels.Length. С <= индекс на последней итерации выйдет за границу массива.",
        fixedLine: "for (int i = 0; i < rebels.Length; i++)",
        rewardXp: 30, rewardCurrency: 1
      },
      {
        id: "t5-side-1", role: "side", type: "single-choice", status: "idea",
        title: "Бабка: пять полок с травами",
        theoryPageId: "t5-l1-concept", npcId: "old_lady",
        npcText: "«У меня в шкафу пять полок с травами. Это что — массив, что ли?»",
        question: "Можно ли считать пять полок с травами одного типа массивом?",
        options: [
          "да, если на всех полках лежит один и тот же тип объектов",
          "нет, массив бывает только из чисел",
          "нет, в массиве не может быть пять элементов",
          "да, но только если они нумеруются с единицы"
        ],
        correctIndex: 0,
        rewardXp: 10, rewardCurrency: 0
      },
      {
        id: "t5-side-2", role: "side", type: "fill-in-blank", status: "idea",
        title: "Грузчик: сколько мешков",
        theoryPageId: "t5-l4-length", npcId: "docker",
        npcText: "«Лень считать вручную. Достань из массива число.»",
        codeTemplate: `int sacks = bags.___;\nConsole.WriteLine("Мешков: " + sacks);`,
        blank: "Length", correctAnswer: "Length",
        rewardXp: 10, rewardCurrency: 0
      },
      {
        id: "t5-side-3", role: "side", type: "code-order", status: "idea",
        title: "Фриц: заменить лозунг",
        theoryPageId: "t5-l5-modify", npcId: "fritz",
        npcText: "«Третий лозунг устарел. Замени на новый.»",
        description: "Собери код: объяви массив лозунгов и замени третий (индекс 2).",
        lines: [
          `string[] slogans = { "Свобода!", "Хлеб!", "Старая жизнь!", "Земля!" };`,
          `slogans[2] = "Новая жизнь!";`,
          `Console.WriteLine(slogans[2]);`
        ],
        correctOrder: [0, 1, 2],
        rewardXp: 15, rewardCurrency: 0
      },
      {
        id: "t5-side-4", role: "side", type: "fill-in-blank", status: "idea",
        title: "Хельга: сытные пайки",
        theoryPageId: "t5-l6-for", npcId: "helga",
        npcText: "«Массив пайков, у каждого есть meat. Посчитай, сколько с мясом.»",
        codeTemplate: `int withMeat = 0;\nfor (int i = 0; i < rations.Length; i++)\n{\n    if (rations[i].meat ___ 0) withMeat++;\n}`,
        blank: ">", correctAnswer: ">",
        rewardXp: 15, rewardCurrency: 0
      },
      {
        id: "t5-side-5", role: "side", type: "find-the-bug", status: "idea",
        title: "Грета: нужный цвет ткани",
        theoryPageId: "t5-l8-search", npcId: "greta",
        npcText: "«Ищу цвет ткани в списке. Не находит, хотя точно есть. Что не так?»",
        lines: [
          `string[] colors = { "red", "green", "blue" };`,
          `bool found = false;`,
          `for (int i = 0; i < colors.Length; i++)`,
          `{`,
          `    if (colors[i] == 5) { found = true; break; }`,
          `}`
        ],
        bugLineIndex: 4,
        explanation: "Сравнение строки с числом 5 — ошибка типов. Должно быть colors[i] == \"red\" (или сравнение с переменной типа string).",
        rewardXp: 20, rewardCurrency: 0
      }
    ],
    finalAction: {
      id: "t5-storm",
      title: "Штурм дворца",
      cost: 0,
      deferred: true,
      cutsceneBlocks: [
        { type: "title", content: "Штурм" },
        { type: "text", content: "Эта сцена будет реализована позже — в текущей версии Тема 5 проходится как набор заданий, без финальной кнопки." },
        { type: "text", content: "Запланировано: штурм дворца Null, спасение принцессы C, возврат памяти # — в виде катсцены или, в будущем, code-write задачи, которая поднимает массив повстанцев в атаку." }
      ]
    }
  }
];
