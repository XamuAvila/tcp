# rtsp-server.py
from gi.repository import Gst, GstRtspServer, GObject
import sys

# Initialize GStreamer
Gst.init(None)

class RTSPServer(GstRtspServer.RTSPServer):
    def __init__(self):
        super().__init__()
        self.set_service('8554')  # Port number for the RTSP server

        # Create a media factory
        self.factory = GstRtspServer.RTSPMediaFactory()
        self.factory.set_launch(
            "( filesrc location=./sarzana-10.ts ! tsparse ! rtpmp2tpay name=pay0 pt=96 )"
        )
        self.factory.set_shared(True)

        # Create the mount point and attach the factory
        self.get_mount_points().add_factory("/stream", self.factory)

def main():
    server = RTSPServer()
    server.attach(None)

    loop = GObject.MainLoop()
    loop.run()

if __name__ == '__main__':
    main()
