from django.http import StreamingHttpResponse
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from .services import ask_gemini_stream

class ChatAPIView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        user_message = request.data.get("message", "")
        session_id = request.data.get("session_id", "default_user")
        
        if not user_message:
            return StreamingHttpResponse(iter(["Error: Message is empty"]), content_type="text/plain")

        response_generator = ask_gemini_stream(user_message, session_id=session_id)

        response = StreamingHttpResponse(response_generator, content_type="text/plain")
        
        # Headers to prevent CORS blocking
        response['X-Accel-Buffering'] = 'no'
        response['Access-Control-Allow-Origin'] = '*'
        response['Access-Control-Allow-Methods'] = 'POST, OPTIONS'
        response['Access-Control-Allow-Headers'] = 'Content-Type, Authorization, X-Requested-With'
        
        return response

    def options(self, request, *args, **kwargs):
        response = super().options(request, *args, **kwargs)
        response['Access-Control-Allow-Origin'] = '*'
        response['Access-Control-Allow-Methods'] = 'POST, OPTIONS'
        response['Access-Control-Allow-Headers'] = 'Content-Type, Authorization, X-Requested-With'
        return response