import React, { useState, useEffect } from 'react';
import { Clock, BookOpen, Brain, Search, Plus, BookOpen as FlashCard, Bell, Settings, User } from 'lucide-react';
import { questions } from '../data/questions.ts';


const HeaderSection = () => {
    return (
        <header className="bg-white border-b border-gray-200 px-4 py-2">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <h1 className="text-xl font-semibold text-red-600">Glossarium</h1>
                    <div className="relative">
                        <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="pl-9 pr-4 py-1.5 rounded-md border border-gray-200 w-64 text-sm focus:outline-none focus:border-gray-300"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 rounded-md">
                        <Plus className="w-4 h-4" />
                        <span>New Post</span>
                    </button>

                    <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 rounded-md">
                        <BookOpen className="w-4 h-4" />
                        <span>Flashcards</span>
                    </button>

                    <button className="p-1.5 text-gray-600 hover:bg-gray-50 rounded-md">
                        <Bell className="w-5 h-5" />
                    </button>

                    <button className="p-1.5 text-gray-600 hover:bg-gray-50 rounded-md">
                        <Settings className="w-5 h-5" />
                    </button>

                    <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                        <User className="w-5 h-5 text-gray-600" />
                    </button>
                </div>
            </div>
        </header>
    );
};

const EnglishTest = () => {
    const [timeLeft, setTimeLeft] = useState(2400); // 40 minutes in seconds
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);
    const [score, setScore] = useState(0);
    const [markedQuestions, setMarkedQuestions] = useState(new Set());

    const currentQuestion = questions[currentQuestionIndex];

    // Format time to mm:ss
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    // Timer effect
    useEffect(() => {
        const timer = timeLeft > 0 && setInterval(() => {
            setTimeLeft(prev => prev - 1);
        }, 1000);
        return () => clearInterval(timer);
    }, [timeLeft]);

    const handleAnswerSelect = (questionId, answer) => {
        setSelectedAnswers({
            ...selectedAnswers,
            [questionId]: answer
        });
    };

    const calculateScore = () => {
        let newScore = 0;
        questions.forEach(question => {
            if (selectedAnswers[question.id] === question.correctAnswer) {
                newScore++;
            }
        });
        setScore(newScore);
        setShowResults(true);
    };

    const resetTest = () => {
        setCurrentQuestionIndex(0);
        setSelectedAnswers({});
        setShowResults(false);
        setScore(0);
        setTimeLeft(2400);
        setMarkedQuestions(new Set());
    };

    const nextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const previousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const toggleMarkQuestion = () => {
        const newMarkedQuestions = new Set(markedQuestions);
        if (newMarkedQuestions.has(currentQuestionIndex)) {
            newMarkedQuestions.delete(currentQuestionIndex);
        } else {
            newMarkedQuestions.add(currentQuestionIndex);
        }
        setMarkedQuestions(newMarkedQuestions);
    };

    if (showResults) {
        return (
            <div className="max-w-6xl mx-auto p-6">
                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-2xl font-bold mb-4">Kết quả bài kiểm tra</h2>
                    <p className="text-lg mb-4">
                        Điểm của bạn: {score} / {questions.length}
                    </p>
                    <div className="space-y-4">
                        {questions.map((question, index) => (
                            <div key={question.id} className={`p-4 rounded ${
                                selectedAnswers[question.id] === question.correctAnswer
                                    ? 'bg-green-50 border border-green-200'
                                    : 'bg-red-50 border border-red-200'
                            }`}>
                                <p className="font-medium">Câu {index + 1}: {question.question}</p>
                                <p>Đáp án của bạn: {selectedAnswers[question.id] || 'Chưa trả lời'}</p>
                                <p>Đáp án đúng: {question.correctAnswer}</p>
                            </div>
                        ))}
                    </div>
                    <button
                        onClick={resetTest}
                        className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                    >
                        Làm lại bài kiểm tra
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto p-6">
            {/* Header section with gradient */}
            <div className="rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 p-8 text-white mb-6">
                <h1 className="text-2xl font-semibold mb-4">Kiểm tra trình độ tiếng Anh</h1>
                <p className="text-white/80 mb-8">
                    Hoàn thành bài kiểm tra này để chúng tôi xác định trình độ tiếng Anh hiện tại của bạn và đề xuất lộ trình học phù hợp.
                </p>

                <div className="flex gap-8">
                    <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5" />
                        <div>
                            <div className="text-sm">Thời gian</div>
                            <div className="font-medium">30-40 phút</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <BookOpen className="w-5 h-5" />
                        <div>
                            <div className="text-sm">Câu hỏi</div>
                            <div className="font-medium">50 câu hỏi</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <Brain className="w-5 h-5" />
                        <div>
                            <div className="text-sm">Kỹ năng</div>
                            <div className="font-medium">Ngữ pháp, Từ vựng, Đọc hiểu</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-12 gap-6">
                {/* Left sidebar */}
                <div className="col-span-3">
                    <div className="bg-white rounded-xl p-4 shadow-sm mb-4">
                        <div className="text-sm text-gray-600 mb-2">Tiến độ</div>
                        <div className="text-xl font-medium">{currentQuestionIndex + 1}/{questions.length}</div>
                        <div className="mt-4">
                            <div className="text-sm text-gray-600">Thời gian còn lại:</div>
                            <div className="text-xl font-medium">{formatTime(timeLeft)}</div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-4 shadow-sm">
                        <div className="text-sm text-gray-600 mb-4">Điều hướng câu hỏi</div>
                        <div className="grid grid-cols-5 gap-2">
                            {questions.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentQuestionIndex(index)}
                                    className={`w-8 h-8 rounded-md text-sm 
                    ${index === currentQuestionIndex ? 'bg-indigo-600 text-white' :
                                        selectedAnswers[questions[index].id] ? 'bg-gray-100' : 'bg-white border border-gray-200'}
                    ${markedQuestions.has(index) ? 'ring-2 ring-yellow-400' : ''}
                    hover:bg-indigo-100`}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>

                        <div className="mt-6 space-y-2">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-indigo-600"></div>
                                <span className="text-sm">Câu hiện tại</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                                <span className="text-sm">Đã trả lời</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full border border-gray-300"></div>
                                <span className="text-sm">Chưa trả lời</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main content */}
                <div className="col-span-9">
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <div className="flex justify-between items-center mb-6">
                            <div className="text-indigo-600 font-medium">
                                {currentQuestion.level}
                            </div>
                            <div className="text-gray-500">Câu {currentQuestionIndex + 1}</div>
                        </div>

                        <div className="mb-8">
                            <div className="flex justify-between items-center mb-2">
                                <h2 className="text-lg font-medium">Câu hỏi {currentQuestionIndex + 1}</h2>
                            </div>

                            <p className="mb-6">{currentQuestion.question}</p>

                            <div className="space-y-3">
                                {currentQuestion.options.map((option, index) => (
                                    <label
                                        key={index}
                                        className={`flex items-center gap-3 p-3 rounded-lg border hover:bg-gray-50 cursor-pointer
                      ${selectedAnswers[currentQuestion.id] === String.fromCharCode(65 + index)
                                            ? 'border-indigo-500 bg-indigo-50'
                                            : 'border-gray-200'
                                        }`}
                                    >
                                        <input
                                            type="radio"
                                            name={`question-${currentQuestion.id}`}
                                            value={String.fromCharCode(65 + index)}
                                            checked={selectedAnswers[currentQuestion.id] === String.fromCharCode(65 + index)}
                                            onChange={(e) => handleAnswerSelect(currentQuestion.id, e.target.value)}
                                            className="w-4 h-4 text-indigo-600"
                                        />
                                        <span>{String.fromCharCode(65 + index)}. {option}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-between items-center">
                            <button
                                onClick={previousQuestion}
                                disabled={currentQuestionIndex === 0}
                                className={`px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg ${
                                    currentQuestionIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
                                }`}
                            >
                                Câu trước
                            </button>

                            <button
                                onClick={toggleMarkQuestion}
                                className="px-4 py-2 text-indigo-600 hover:bg-indigo-50 rounded-lg"
                            >
                                {markedQuestions.has(currentQuestionIndex)
                                    ? 'Bỏ đánh dấu'
                                    : 'Đánh dấu để xem lại sau'
                                }
                            </button>

                            {currentQuestionIndex === questions.length - 1 ? (
                                <button
                                    onClick={calculateScore}
                                    className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                                >
                                    Nộp bài
                                </button>
                            ) : (
                                <button
                                    onClick={nextQuestion}
                                    className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                                >
                                    Câu tiếp theo
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EnglishTest;