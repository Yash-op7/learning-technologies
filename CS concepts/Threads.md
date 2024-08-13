- Whenever you want to do something like watching a video, listening to audio or running some code, to do this a worker is required, which is called a thread, it is a simple programmatic implementation which takes a program and it handles its resource allocation, and everything that is required for the program to run.

- once core can run one thread at a time

- Thread pool:
Lets consider the example of 10k requests per sec, so the server can create and maintain 100 threads and a task queue, as the requests come one by one we add them to the queue and assign threads, there is continous loop running which check which thread is free and it assigns it to the next task. we dont need to create new threads and spike memory.