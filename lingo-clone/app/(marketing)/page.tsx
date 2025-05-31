export default function Home() {
  return (
    <div className="flex items-center justify-center h-full bg-gradient-to-b from-green-100 to-green-200">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold text-green-900">
          Học ngôn ngữ dễ dàng với Duolingo Clone
        </h1>
        <p className="text-xl text-green-800">
          Tham gia ngay để bắt đầu hành trình học tập của bạn!
        </p>
        <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
          <Link href="/courses">
            Bắt đầu học
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  );
};
