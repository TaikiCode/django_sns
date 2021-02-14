from django.db import models
from django.core.validators import FileExtensionValidator
from profiles.models import Profile


class Post(models.Model):
    '''
    投稿モデル
    '''
    content = models.TextField()
    image = models.ImageField(upload_to='posts', validators=[FileExtensionValidator(['png', 'jpg', 'jpeg'])], blank=True)
    liked = models.ManyToManyField(Profile, blank=True, related_name='likes')  # いいねは、他人のプロフィール
    author = models.ForeignKey(Profile, related_name='posts', on_delete=models.CASCADE)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return str(self.content[:20])
    
    def num_likes(self):
        return self.liked.all().count()
    
    def num_comments(self):
        return self.comment_set.all().count()
    
    class Meta:
        ordering = ('-created',)    
    



class Comment(models.Model):
    '''
    コメントモデル
    '''
    user = models.ForeignKey(Profile, on_delete=models.CASCADE)  # 誰が
    post = models.ForeignKey(Post, on_delete=models.CASCADE)  # 何を
    body = models.TextField(max_length=200)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return str(self.pk)


LIKE_CHOICES = (
    ('Like', 'いいね'),
    ('Unlike', '解除')
)


class Like(models.Model):
    user = models.ForeignKey(Profile, on_delete=models.CASCADE)  # 誰が
    post = models.ForeignKey(Post, on_delete=models.CASCADE)  # 何を
    value = models.CharField(choices=LIKE_CHOICES, max_length=8)    
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.user}--{self.post}--{self.value}"
