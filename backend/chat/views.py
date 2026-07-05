from django.http import StreamingHttpResponse
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from .services import ask_gemini_stream

class ChatAPIView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        user_message = request.data.get("message", "")
        # 🔴 Frontend se unique session_id pakdein, agar nahi aaye toh default par dalein
        session_id = request.data.get("session_id", "default_user")
        
        if not user_message:
            return StreamingHttpResponse(iter(["Error: Message is empty"]), content_type="text/plain")

        # 🔴 Naya session_id function me pass karein
        response_generator = ask_gemini_stream(user_message, session_id=session_id)

        response = StreamingHttpResponse(response_generator, content_type="text/plain")
        response['X-Accel-Buffering'] = 'no'
        return response